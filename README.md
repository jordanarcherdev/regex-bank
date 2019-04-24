# JavaScript Regex Bank
A collection of useful regular expressions which can be pulled into your project for use. Handy if you need more than one across your program.

# Installation
```npm install --save regex-bank```

# Usage
These expressions can be used the same as any other pre-defined expression. It is written so you only have to pull in the regex you require into your code. Obviously they can also just all be pulled in if that's your thing.

```javascript
const { emailRe, usernameRe } = require('regex-bank');

let isEmail = someEmail.match(emailRe)

let correctUser = someUser.match(usernameRe)
```

# Available expressions
Currently included are the following expressions and their given names which you can pull into your program, if you have any suggestions you would like to add, feel free to create an issue or a pull request.
## Characters
**alphabetRe** ~ Alphabetic character
**alphanumericRE** ~ Alpha-Numeric characters
**specialCharsRe** ~ Special Characters
## Numbers
**positiveIntRe** ~ Positive Whole Number
**negativeIntRe** ~ Negative Whole Number
**positiveNumberRe** ~ Positive Number inc Decimal
**negativeNumberRe** ~ Positive Number inc Decimal
**integerRe** ~ Whole Number
**plusMinusRe** ~ Positive or Negative Number
## User Inputs
**emailRe** ~ Valid email address
**usernameRe** ~ Username allowing only alphanumeric characters and - _ between 3 and 16 characters
**phoneNumberRe** ~ US phone number
**zipCodeRe** ~ US and Canadian Zip Code
**ukPostCodeRe** ~ UK Post Code
**passwordRe** ~ Password must contain one lowercase letter, one uppercase letter, one number, one unique character such as !@#$%^&? and be at least 6 characters long.
## URLs and Code
**urlRe** ~ Valid URL
**urlSlugRe** ~ URL Slug
**youtubeIdRe** ~ The youtube video ID from a URL
**wordpressShortcodeRe** ~ WordPress ShortCode
**imgShortCodeRe** ~ Image ShortCode

**htmlTagsRe** ~ HTML Tags
**imgSrcRe** ~ Returns img tag src
**cssCommentRe** ~ CSS Comments
**hexColorRe** ~ Hexadecimal values
## Payment Information
**visaRe** ~ Valid Visa Credit Card Number
**mastercardRe** ~ Valid Mastercard Credit Card Number
**amexRe** ~ Valid American Express Credit Card Number
**discoverRe** ~ Valid Discover Card Number
**dinersClubRe** ~ Valid Diners Club Card Number
**jcbRe** ~ Valid JCB Card Number
## Date and Time
**dateRe** ~ US Formats (MM/DD/YYYY)(MM-DD-YYYY)(MM DD YYYY)
**ukDateRe** ~ UK Date Formats DD/MM/YYYY (The proper way!)
**isoDateTimeRe** ~ Date and Time ISO-8601 Format
**timeRe** ~ Time in 24hr Format
## Network
**ipv4Re** ~ IPv4 Address
**ipv6Re** ~ IPv6 Address
# Misc
**trimRe** ~ Trailing and Leading White Space From a String
**newLineRe** ~ New Line in Text
**tvEpisodeRe** ~ TV Episode Name formats eg S02E14
**morseCodeRe** ~ Morse Code
**stringDuplicatesRe** ~ Duplicates in a String

# Credit where credit is due
I wrote this module but **NOT** the regex, I have found them in various places throughout the internet and saved them in a file for later use, Think it will be easier to store in a module for later.

If you are one of the javascript wizards who wrote one of these expressions please get in touch and I'll either credit you, or remove it from the public module as per your wishes.
