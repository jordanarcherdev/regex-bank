module.exports = {
    //----------------------------------------------------------------
    //                  CHARACTERS
    //----------------------------------------------------------------

    //Alphabetic characters
    alphabetRe: /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/,
    //Alpha-Numeric Characters
    alphanumericRe:  /^[a-zA-Z0-9]+$/,
    //Special Characters
    specialCharsRe: /[\-\[\]\/\\\{\}\(\)\*\+\?\.\^\$\|]/,

    //----------------------------------------------------------------
    //                  NUMBERS
    //----------------------------------------------------------------

    //Positive Integer
    positiveIntRe:  /^\d+$/,
    //Negative Integer
    negativeIntRe: /^-\d+$/,
    //Positive Number
    positiveNumberRe:  /^\d*\.?\d+$/,
    //Negative Number
    negativeNumberRe: /^-\d*\.?\d+$/,
    //Integer
    integerRe:  /^-?\d+$/,
    //Positive or negative number
    plusMinusRe: /^-?\d*\.?\d+$/,

    //----------------------------------------------------------------
    //                  USER INPUTS
    //----------------------------------------------------------------

    //Email address
    emailRe:  /^.+@.+$/,
    //Exclude special characters username
    usernameRe: /^[a-zA-Z0-9_-]{3,16}$/,
    //US Phone Number
    phoneNumberRe:  /^\+?(\d.*){3,}$/,
    //US / Canadian Zip/postal code
    zipCodeRe: /(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,
    //UK PostCode
    ukPostCodeRe: /GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4}/,
    //Password
    //The password must contain one lowercase letter, one uppercase letter, one number, one unique character such as !@#$%^&? and be at least 6 characters long.
    passwordRe: /^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,

    //-----------------------------------------------------------------
    //                  URLS and CODE
    //-----------------------------------------------------------------

    //Matches a valid URL
    urlRe:  /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    //URL Slug
    urlSlugRe:  /^[a-z0-9-]+$/,
    //Finds the ID of a youtube video
    youtubeIdRe:  /https?:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi,
    //Wordpress Shortcodes,
    wordpressShortcodeRe:  /^\[([a-z-_0-9]+)([^\[]+)*(?:\](.*)\[\/\1\]|\s+\/\])$/,
    //Image shortcode
    imgShortCodeRe:  /\[img\](.*?)\[\/img\]/,


    //Matches HTML tags
    htmlTagsRe: /<(?:.|\n)*?>/gm,
    //Finds the source of an img tag
    imgSrcRe:  /^<\s*img[^>]+src\s*=\s*(["'])(.*?)\1[^>]*>$/,
    //Matches CSS comments
    cssCommentRe: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//,
    //Hex Colour Value
    hexColorRe: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,

    //-----------------------------------------------------------------
    //                  PAYMENT INFORMATION
    //-----------------------------------------------------------------

    //Visa Credit Card Numbers
    visaRe: /^4[0-9]{12}(?:[0-9]{3})?$/,
    //Mastercard Credit Card Numbers
    mastercardRe: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    //American Express Credit Card Numbers
    amexRe: /^3[47][0-9]{13}$/,
    //Discover Credit Card Numbers
    discoverRe: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    //Diners Club Card Numbers
    dinersClubRe: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    //JCB Card Numbers
    jcbRe: /^(?:2131|1800|35\d{3})\d{11}$/,


    //-----------------------------------------------------------------
    //                  DATE and TIME
    //-----------------------------------------------------------------

    //Us Date Formats (MM/DD/YYYY)(MM-DD-YYYY)(MM DD YYYY)
    dateRe:  /^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$/,
    //Matches date in format dd/mm/yyyy
    ukDateRe: /^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/,
    //Date + Time ISO-8601 format
    isoDateTimeRe:  /^(?![+-]?\d{4,5}-?(?:\d{2}|W\d{2})T)(?:|(\d{4}|[+-]\d{5})-?(?:|(0\d|1[0-2])(?:|-?([0-2]\d|3[0-1]))|([0-2]\d{2}|3[0-5]\d|36[0-6])|W([0-4]\d|5[0-3])(?:|-?([1-7])))(?:(?!\d)|T(?=\d)))(?:|([01]\d|2[0-4])(?:|:?([0-5]\d)(?:|:?([0-5]\d)(?:|\.(\d{3})))(?:|[zZ]|([+-](?:[01]\d|2[0-4]))(?:|:?([0-5]\d)))))$/,
    //Time in 24 Hour format
    timeRe: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,


    //-----------------------------------------------------------------
    //                  NETWORK
    //-----------------------------------------------------------------

    //Matches an IPv4 Address
    ipv4Re: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    //Matches an IPv6 Address
    ipv6Re:  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,

    //------------------------------------------------------------------
    //                  MISCELLANIOUS
    //------------------------------------------------------------------

    //Trim String
    trimRe: /^s*|s*$/g,
    //New Line
    newLineRe:  /[\r\n]|$/,
    //Matches TV Episode naming formats eg S01E02
    tvEpisodeRe:   /(.*)\D(\d{1,2})[ex\-](\d{1,2})/i,
    //Morse Code
    morseCodeRe: /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/,
    //Duplicates in a string
    stringDuplicatesRe: /(\b\w+\b)(?=.*\b\1\b)/

}
