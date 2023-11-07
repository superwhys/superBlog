package middlewares

import (
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	"github.com/yazl-tech/yazl/utils/lg"
)

func verifySignature(payload []byte, secretToken string, signatureHeader string) error {
	if signatureHeader == "" {
		return fmt.Errorf("x-hub-signature-256 header is missing")
	}

	mac := hmac.New(sha256.New, []byte(secretToken))
	mac.Write(payload)
	expectedMAC := mac.Sum(nil)
	expectedSignature := "sha256=" + hex.EncodeToString(expectedMAC)

	if !hmac.Equal([]byte(expectedSignature), []byte(signatureHeader)) {
		return fmt.Errorf("Request signatures didn't match")
	}

	return nil
}

func GithubVerifyMiddleware(ctx context.Context, secretToken string) gin.HandlerFunc {
	ctx = lg.With(ctx, "[GithubVerifyMiddleware]")
	return func(c *gin.Context) {
		b, err := io.ReadAll(c.Request.Body)
		if err != nil {
			c.AbortWithError(http.StatusInternalServerError, errors.Wrap(err, "read body"))
			return
		}

		sign := c.GetHeader("X-Hub-Signature-256")
		if err := verifySignature(b, secretToken, sign); err != nil {
			c.AbortWithError(http.StatusForbidden, errors.New("verify signature failed!"))
			return
		}
	}
}