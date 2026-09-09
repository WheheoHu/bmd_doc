# Encrypt DCTL Options

This section covers the supported settings for the method [`Resolve:EncryptDCTL`](../api/Resolve.md#encryptdctlinputpath-encryptdctloptions).

The encryptDCTLOptions setting is a dictionary containing the following keys:

`Name`: string (output filename. Defaults to the input filename)

`Expiry`: string (expiry date as a valid ISO 8601 string. No expiry when the value is empty)

`OutputFolder`: string (output folder. Defaults to the user's home folder)
