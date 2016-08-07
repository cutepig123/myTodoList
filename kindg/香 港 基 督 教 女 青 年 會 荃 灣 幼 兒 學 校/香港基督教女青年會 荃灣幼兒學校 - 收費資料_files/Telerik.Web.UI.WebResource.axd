/* START Telerik.Web.UI.Skins.Input.css */
/*Telerik RadInput Common CSS*/

/*global*/

.RadInput,
.RadInputMgr
{
	vertical-align:middle;
}

.RadInput table
{
	border:0;
	vertical-align:bottom;
}

.RadInput table.riTable td
{
	border:0;
	padding:0;
	vertical-align:middle;
	overflow:visible;/*RadGrid*/
}

.RadInput table td.riCell
{
	padding-right:4px;
}

.RadInput textarea
{
	vertical-align:bottom;
	overflow:auto;
	resize:none;
}

/*textbox states*/

html body .RadInput .riTextBox,
html body .RadInputMgr
{
	border-width:1px;
	border-style:solid;
	padding:2px 1px 3px;
	vertical-align:middle;
}

textarea.RadInputMgr
{
	overflow:auto;
}

/*buttons*/

.RadInput a
{
	display:block;
	overflow:hidden;
	position:relative;/*FF*/
	outline:none;/*FF*/
	z-index:2;/*Opera*/
	text-indent:-2222px;
	text-align:center;
	text-decoration:none;
}
* html .RadInput a{position:static}/*IE6*/
*+html .RadInput a{position:static}/*IE7*/

.RadInput .riSpin a
{
	margin:0 1px;
}

.RadInput a.riDown
{
	margin-top:3px;
}

* html .RadInput a.riDown
{
	margin-top /**/:0;
}

/*label*/

.RadInput .riLabel
{
	margin:0 4px 0 0;
	white-space:nowrap;
}

/*rtl*/

.RadInputRTL table td.riCell
{
	padding:0 0 0 4px;
}

.RadInputRTL .riLabel
{
	margin:0 0 0 4px;
}

/* Password Strength Metter */
.riStrengthBar
{
	background:url('/WebResource.axd?d=ftcSqsqgYECQoMOhzBEWhbcbcMBUVmkzFu8R0fofmq74KyNPk7-PUMnJj7wrEXZ_HRQfrpDD32W5E4K3qfRcA0Vh5rqDkpC0Ar6l8xVNPguKc0Ql6akdzwiaBqyeUMByEUqYwgCQmhyp69Nw16SrvGMHH2eThi1V5H05Iza6N0A1&t=634490930149795928') repeat-y;
    display: inline-block;
    width:100px;
    height:20px;
    margin-left:5px;
    font:12px/18px "segoe ui",arial,sans-serif;
    color:#000;
    text-align:center;
    vertical-align:middle;
    overflow:hidden;
}

.riStrengthBarL0
{
    background: none;
}

.riStrengthBarL1
{
    background-color:#ff3933;
    background-position:0 0;
    color:#620000;
}

.riStrengthBarL2
{
    background-color:#ff7833;
    background-position:-300px 0;
    color:#922b00;
}

.riStrengthBarL3
{
    background-color:#ffbe33;
    background-position:-600px 0;
    color:#9e5900;
}

.riStrengthBarL4
{
    background-color:#ddcc33;
    background-position:-900px 0;
    color:#696400;
}

.riStrengthBarL5
{
    background-color:#6bcc33;
    background-position:100% 0;
    color:#236800;
}

/* END Telerik.Web.UI.Skins.Input.css */
/* START Telerik.Web.UI.Skins.Menu.css */
/* Common CSS */

.RadMenu
{
	white-space:nowrap;
	float:left;
	position:relative;
    z-index /*\**/: 7000\9; /* IE8 hasLayout fix */
}

.RadMenu .rmRootGroup
{
	margin:0;
	padding:0;
	position:relative;
	left:0;
	display: inline-block;
}

* html .RadMenu .rmRootGroup { float: left; }

.RadMenu:after,
.RadMenu .rmRootGroup:after
{
    content:""; 
    display:block;
    height:0;
    overflow: hidden;
    line-height:0;
    font-size:0;
    clear:both;
    visibility:hidden;
}

.RadMenu ul.rmVertical,
.RadMenu ul.rmHorizontal,
.RadMenu ul.rmRootScrollGroup,
.RadMenu_Context ul.rmHorizontal
{
	margin:0;
	padding:0;
	display:none;
	position:relative;
	left:0;
	float:left;
}

.rmSized ul.rmVertical
{
	width: 100%;
}

.rmSized ul.rmRootGroup
{
	float: none;
}

.rmSized .rmRootGroup .rmVertical
{
	width: auto;
}

.RadMenu .rmItem
{
	float:left;
	position:relative;
	list-style-image: none;
	list-style-position:outside;
	list-style:none;	
}

* html .RadMenu .rmItem
{
	display:inline;
}

.RadMenu .rmHorizontal .rmItem
{
	clear:none;
}

.RadMenu .rmVertical .rmItem
{
	clear:both;
}

.rmSized .rmVertical .rmItem
{
	width: 100%;
}

.rmSized .rmHorizontal .rmItem,
.rmSized .rmRootGroup .rmVertical .rmItem
{
	width: auto;
}

.RadMenu ul.rmActive,
.RadMenu ul.rmRootGroup
{
	display:block;
}

.RadMenu .rmSlide, 
.RadMenu_Context
{
	position:absolute;
	overflow:hidden;
	display:none;
	float:left;
}

* html .RadMenu .rmSlide, 
* html .RadMenu_Context
{
	height:1px;
}

.RadMenu_Context
{
	z-index:1000;
	overflow:visible;
}

.RadMenu .rmText
{
	display:block;
}

.RadMenu div.rmText /*templates*/
{
	white-space:normal;
	background: transparent;
}

.RadMenu a.rmLink
{
	cursor:default;
	display:block;
}

.rmScrollWrap
{
	position:absolute;
	float:left;
	overflow:hidden;
	left:0;
}

.RadMenu .rmLeftArrow,
.RadMenu .rmTopArrow,
.RadMenu .rmBottomArrow,
.RadMenu .rmRightArrow
{
	position:absolute;
	z-index:2000;
	text-indent:-1000em;
	font-size: 0;
	line-height: 0;
	outline: 0;
	overflow: hidden;
}

.RadMenu .rmLeftArrowDisabled,
.RadMenu .rmTopArrowDisabled,
.RadMenu .rmBottomArrowDisabled,
.RadMenu .rmRightArrowDisabled
{
	display:none;
	text-indent:-1000em;
	font-size: 0;
	line-height: 0;
}

.RadMenu .rmBottomArrow,
.RadMenu .rmBottomArrowDisabled
{
	margin-bottom: -1px;
}

.RadMenu .rmLeftImage
{
	border:0;
	float:left;
}

.RadMenu_rtl
{
	float:right;
	text-align: right;
}

.RadMenu_rtl ul.rmVertical
{
	float:right;
}

.RadMenu_rtl .rmItem
{
	float:right;	
}

.RadMenu_rtl .rmLeftImage,
.RadMenu_Context_rtl .rmLeftImage
{
	border:0;
	float:right;
}

.RadMenu_rtl .rmLeftArrow,
.RadMenu_rtl .rmTopArrow,
.RadMenu_rtl .rmBottomArrow,
.RadMenu_rtl .rmRightArrow,
.RadMenu_rtl .rmLeftArrowDisabled,
.RadMenu_rtl .rmTopArrowDisabled,
.RadMenu_rtl .rmBottomArrowDisabled,
.RadMenu_rtl .rmRightArrowDisabled
{
	text-indent:1000em !important;
}

.RadMenu .rmLink
{
	width:auto;
}

.RadMenu .rmSeparator,
.RadMenu .rmSeparator:after
{
    line-height: 0;
    font-size: 0;
    overflow: hidden;
}

.RadMenu div.rmRootGroup
{
    position: relative;
}
/* <base styles> */

.RadMenu .rmItem
{
	padding: 0;
}

.RadMenu .rmLink
{
	padding: 0 0 0 12px;
	outline: 0;
	float: left;
}

.RadMenu_rtl .rmLink
{
	padding: 0 12px 0 0;
    margin-left: 2px;
}

.RadMenu .rmText
{
	padding-bottom: 1px;
	float: left;
}

.RadMenu_rtl .rmText
{
    margin-left: -2px;
}

/* optimized for 16x16 */
.RadMenu .rmLeftImage
{
	margin: 4px 2px 0 -3px;
	padding-bottom: 4px;
}

.RadMenu_rtl .rmLeftImage
{
	margin: 4px -3px 0 2px;
	padding-bottom: 2px;
}

/* Image sprite placeholder size */
.RadMenu span.rmLeftImage
{
	width: 16px;
	height: 16px;
}

.RadMenu .rmVertical .rmLeftImage+.rmText
{
	padding: 0 8px 1px 24px;
}

.RadMenu .rmVertical .rmText
{
	padding: 0 24px 1px 0;
}

.RadMenu .rmHorizontal .rmText
{
	padding: 0 12px 1px 0;
}

.RadMenu_rtl .rmHorizontal .rmText
{
	padding: 0 0 1px 12px;
}

.RadMenu_rtl .rmVertical .rmText
{
	padding: 0 0 1px 24px;
}

.RadMenu .rmVertical .rmText,
.RadMenu .rmHorizontal .rmVertical .rmText
{
	display: block;
	float: none;
}

.RadMenu .rmVertical .rmLink,
.RadMenu .rmHorizontal .rmVertical .rmLink
{
	float: none;
}

* html .RadMenu .rmGroup .rmVertical .rmLink,
* html .RadMenu .rmGroup .rmHorizontal .rmLink
{
	float: left;
}

/* <Shadows and rounded corners */

.RadMenu .rmTopRight,
.RadMenu .rmBottomLeft,
.RadMenu .rmBottomRight,
.RadMenu .rmRoundedCorners ul.rmGroup,
.rmRoundedCorners ul.rmGroup,
.rmRoundedCorners ul.rmGroup ul.rmGroup,
.RadMenu .rmRoundedCorners .rmMultiColumn
{
	border: 0;
	background-position: 0 0;
}

.RadMenu .rmRoundedCorners .rmMultiColumn ul.rmMultiGroup
{
	background: none;
	margin: 0;
}

.RadMenu .rmRoundedCorners .rmGroupColumn
{
	height: 100%;
}

.RadMenu .rmRoundedCorners li.rmFirstGroupColumn
{
	background-color: transparent;
}

.RadMenu .rmTopFix,
.RadMenu .rmTopRight,
.RadMenu .rmBottomFix,
.RadMenu .rmBottomLeft,
.RadMenu .rmBottomRight
{
	position: absolute;
	width: 4px;
	height: 4px;
	list-style-type: none;
	list-style-position: outside;
	font-size: 0;
}

.RadMenu_rtl .rmTopRight,
.RadMenu_rtl .rmBottomRight
{
	width: 32px;
}

.RadMenu_rtl .rmTopShadowRight,
.RadMenu_rtl .rmBottomShadowRight
{
	width: 4px;
}

.RadMenu .rmTopShadowRight,
.RadMenu .rmBottomShadowLeft,
.RadMenu .rmBottomShadowRight
{
	background-repeat: no-repeat;
	background-color: transparent;
}

.rmRoundedCorners .rmTopShadowRight,
.rmRoundedCorners .rmBottomShadowLeft,
.rmRoundedCorners .rmBottomShadowRight
{
	width: 5px;
	height: 5px;
}

.RadMenu .rmTopRight
{
	background-position: 100% 0;
	top: 0;
	right: -4px;
	height: 100%;
}

.RadMenu .rmBottomLeft
{
	background-position: 0 100%;
	bottom: -4px;
	left: 0;
	width: 100%;
}

.RadMenu .rmBottomFix
{
	background-position: -1px 0;
	width: auto;
	bottom: -4px;
	left: 5px;
	right: 0;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.RadMenu .rmTopFix
{
	background-position: -1px 0;
	width: auto;
	top: 0;
	left: 5px;
	right: 0;
	border-top-width: 1px;
	border-top-style: solid;
}

* html .RadMenu .rmTopFix,
* html .RadMenu .rmBottomFix,
* html .RadMenu .rmBottomShadowLeft
{
	width: 0;
}

.RadMenu .rmBottomRight
{
	background-position: 100% 100%;
	bottom: -4px;
	right: -4px;
	width: 8px;
}

.RadMenu .rmShadows li.rmBottomShadowLeft,
.RadMenu .rmShadows .rmBottomShadowRight,
.rmShadows .rmGroup li.rmBottomShadowLeft,
.rmShadows .rmGroup .rmBottomShadowRight
{
	background-image: url('/WebResource.axd?d=BGKY0jNeFiBCNUKYP9pAybgTkyoHKHrM1pdvrj2PokMq3btfTlZCD1rXjGVxHgzdqbPpW3Cs4vDqEWAq0wtXgSTSPGK-gy9lVPiNbRhTEPgtnSOLO9HL8AWUFwrUMchs4ohNL4expC0-ZiDx0x5u4Nwc8TQNg3ntxXg4OqcDA141&t=634490930149795928');
}

.RadMenu .rmRoundedCorners li.rmBottomShadowLeft,
.RadMenu .rmRoundedCorners .rmBottomShadowRight,
.rmRoundedCorners .rmGroup li.rmBottomShadowLeft,
.rmRoundedCorners .rmGroup .rmBottomShadowRight
{
	background-image: url('/WebResource.axd?d=YlyyVBVv6qyidZTy5pV6hYs4in5j9Ek-fA7w0dLV95ZuknA3gOGPUwU1VAPJUQR5PU-xFTvokaAaJYHGdY38_vJo5wZiS2Wx9mZZ9HgQFt1u3FbL1V6QNGkQRGIdBdoEjdNiCMWLOxEZ_nDU2I5tVNNH98r8SnWemt3k3ubTWDviQbSf9MgJxeEAo3VOoCYc0&t=634490930149795928');
}

.RadMenu .rmShadows .rmTopShadowRight,
.rmShadows .rmGroup .rmTopShadowRight
{
	right: -5px;
	background-image: url('/WebResource.axd?d=Colr_zWhlfhGVQTW7UDm4SBnjnWJU9cujlYJSrzeNo1J5BYH_c80VzZSYqtCokZCl4Z9pY7H6TZqPJ3OntssFM7xrz43pVH9pUpDcC7HjYXMsOayx7M7hhNOXCW7tAiIbbgEeYrvs8X4dQSU5eG53GQbehBjdxAX5NHwKVK14A01&t=634490930149795928');
	background-position: 100% 0;
}

.RadMenu .rmBottomShadowLeft
{
	bottom: -5px;
	left: 1px;
	background-position: 0 100%;
}

.RadMenu .rmBottomShadowRight
{
	bottom: -5px;
	right: -5px;
	width: 4px;
	height: 5px;
}

.RadMenu .rmScrollWrapContainer .rmTopShadowRight
{
	right: -4px;
}

.RadMenu .rmScrollWrapContainer .rmBottomShadowRight
{
	bottom: -4px;
	right: -4px;
	width: 3px;
	height: 4px;
}

.RadMenu .rmScrollWrapContainer .rmBottomShadowLeft
{
	bottom: -4px;
}

.RadMenu .rmRoundedCorners .rmTopShadowRight,
.rmRoundedCorners .rmGroup .rmTopShadowRight
{
	right: -8px;
	background-image: url('/WebResource.axd?d=uVt9-CyoEYlp7wnQfjYgkysb_HxJRT1sYJ5Qi8B7qXquO846QXcuptdNGc7gSOEsMNNSeBmMh0ZNdcQffUasHDn6YpJAwrpM456fhr9fhBcj0TbwvSzxQrG18ma00ckkuWy1w0yOhZjD-xanVfRozquz_MfbS1KnVGL7BNHQWJ01&t=634490930149795928');
}

.RadMenu .rmRoundedCorners .rmBottomShadowLeft,
.rmRoundedCorners .rmGroup .rmBottomShadowLeft
{
	bottom: -8px;
}

.RadMenu .rmRoundedCorners .rmBottomShadowRight,
.rmRoundedCorners .rmGroup .rmBottomShadowRight
{
	bottom: -8px;
	right: -8px;
	width: 7px;
	height: 8px;
}

* html .RadMenu .rmRoundedCorners .rmBottomShadowRight,
* html .rmRoundedCorners .rmGroup .rmBottomShadowRight
{
	width: 11px;
	height: 8px;
	font-size: 0;
}

.RadMenu .rmAccessKey
{
	font-size: 10px;
	font-weight: normal;
	float: right;
	padding-right: 8px;
}

.RadMenu .rmRoundedCorners .rmGroup .rmItem,
.rmRoundedCorners .rmGroup .rmItem
{
	z-index: 1;
}

* html .RadMenu .rmRoundedCorners .rmGroup .rmText,
* html .RadMenu .rmShadows .rmGroup .rmText, 
* html .rmRoundedCorners .rmGroup .rmText,
* html .rmShadows .rmGroup .rmText { zoom: normal }

.RadMenu .rmRoundedCorners .rmSlide .rmScrollWrap,
.rmRoundedCorners .rmScrollWrapContainer .rmScrollWrap
{
	background-image: none;
}

.RadMenu .rmRoundedCorners .rmMultiGroup > .rmItem
{
	background-image: none;
}

.RadMenu .rmRoundedCorners .rmSlide,
.RadMenu .rmShadows .rmSlide,
.rmRoundedCorners .rmSlide,
.rmShadows .rmSlide,
div.rmRoundedCorners,
div.rmShadows
{
	padding: 0 8px 10px 0;
}

.RadMenu .rmRoundedCorners ul.rmGroup,
.rmRoundedCorners .rmGroup ul.rmGroup,
.rmRoundedCorners ul.rmGroup
{
	margin-top: 1px;
	padding: 1px;
}

.RadMenu .rmRoundedCorners ul.rmGroup .rmSlide,
.rmRoundedCorners ul.rmGroup .rmSlide
{
	margin-top: -5px;
}

.RadMenu_rtl .rmRoundedCorners ul.rmGroup .rmSlide,
.RadMenu_rtl.rmRoundedCorners ul.rmGroup .rmSlide
{
	margin-right: -5px;
}

.RadMenu .rmRoundedCorners .rmSlide .rmScrollWrap,
.rmRoundedCorners .rmSlide .rmScrollWrap
{
	border: 0;
}

.RadMenu .rmRoundedCorners .rmScrollWrap,
.RadMenu .rmShadows .rmScrollWrap,
.rmRoundedCorners .rmScrollWrap,
.rmShadows .rmScrollWrap
{
	position: relative;
}

.RadMenu .rmRoundedCorners .rmScrollWrapContainer,
.rmRoundedCorners .rmScrollWrapContainer
{
	padding: 4px 0 0 4px;
}

.RadMenu .rmScrollWrapContainer
{
	position: absolute;
}

.RadMenu .rmScrollWrapContainer .rmTopFix
{
	height: 100%;
}

* html .RadMenu .rmScrollWrapContainer .rmTopFix
{
	height: 5px;
}

.RadMenu .rmRoundedCorners ul.rmGroup,
.rmRoundedCorners .rmGroup ul.rmGroup,
.rmRoundedCorners ul.rmGroup
{
	padding: 4px 0 0 4px;
}

.RadMenu .rmScrollWrapContainer .rmGroup,
.rmScrollWrapContainer .rmGroup .rmGroup,
.rmScrollWrapContainer .rmGroup
{
	padding: 0;
}

/* </Shadows and rounded corners */

.RadMenu .rmRootGroup .rmItem .rmGroup
{
	padding-bottom: 1px;
}

.RadMenu .rmRoundedCorners .rmItem .rmGroup
{
	padding-bottom: 0;
}

.RadMenu .rmGroup .rmItem
{
	padding: 0;
}

.RadMenu .rmGroup .rmLink,
.RadMenu .rmSlide .rmGroup .rmTemplate
{
	padding: 0;
}

.RadMenu_rtl .rmGroup .rmLink,
.RadMenu_rtl .rmSlide .rmGroup .rmTemplate
{
	padding: 0;
}

.RadMenu .rmGroup .rmText
{
	padding: 0 54px 0 28px;
	margin: 0 0 0 4px;
}

.RadMenu_rtl .rmGroup .rmText
{
	padding: 0 28px 0 54px;
	margin: 0 4px 0 0;
}

.RadMenu .rmMultiColumn
{
	list-style: none;
	display: block;
   	position: relative;
	margin: 0;
	padding: 0;
	zoom: 1;
}

.RadMenu .rmMultiColumn .rmMultiGroup
{
	background: none;
	border: 0;
	float: left;
	display: block;
    position: static;
}

.RadMenu .rmMultiColumn .rmGroupColumn
{
	float: left;
}

.RadMenu_rtl .rmMultiColumn .rmGroupColumn  
{
	float: right;
}

*+html .RadMenu_rtl .rmMultiColumn .rmItem { float: left; }
* html .RadMenu_rtl .rmMultiColumn .rmItem { float: left; }

.RadMenu .rmSlide .rmVertical .rmLeftImage+.rmText,
.RadMenu_Context .rmGroup .rmLeftImage+.rmText
{
	padding: 0 54px 0 28px;
}

.RadMenu_rtl .rmSlide .rmVertical .rmLeftImage+.rmText,
.RadMenu_Context_rtl .rmGroup .rmLeftImage+.rmText
{
	padding: 0 28px 0 54px;
}

.RadMenu .rmSlide .rmHorizontal .rmText
{
	padding: 0 11px 0 10px;
}

.RadMenu .rmGroup .rmLeftImage
{
	margin: 4px 0 0 6px;
}

* html .RadMenu .rmGroup .rmLeftImage { margin-left: 4px; }
*+html .RadMenu .rmGroup .rmLeftImage { margin-left: 4px; }

* html .rmRoundedCorners .rmGroup .rmLeftImage { margin-left: 1px; }
*+html ul.rmRoundedCorners .rmGroup .rmLeftImage { margin-left: 2px; }

.RadMenu_rtl .rmGroup .rmLeftImage
{
	margin: 4px 6px 0 0;
}

* html .RadMenu .rmGroup .rmLeftImage { position: absolute; }
*+html .RadMenu .rmGroup .rmLeftImage { position: absolute; }

.RadMenu a.rmImageOnly img.rmLeftImage,
.RadMenu .rmRootGroup a.rmImageOnly
{
	padding: 0;
	margin: 0;
}

.RadMenu .rmRootGroup a.rmImageOnly span.rmText
{
	display: none;
}

* html .RadMenu .rmImageOnly .rmLeftImage { position: static; }
*+html .RadMenu .rmImageOnly .rmLeftImage { position: static; }

* html .RadMenu_rtl .rmGroup .rmLeftImage { right: 0; }
*+html .RadMenu_rtl .rmGroup .rmLeftImage { right: 0; }

*+html .RadMenu_Context_rtl ul.rmGroup { position: absolute; }
* html .RadMenu_Context_rtl ul.rmGroup { position: absolute; }

*+html .RadMenu_Context_rtl .rmGroup .rmItem { float: left; }
* html .RadMenu_Context_rtl .rmGroup .rmItem { float: left; }

/* <separators> */

.RadMenu .rmSeparator .rmText
{
	line-height: 0;
	font-size: 0;
	padding: 0;
	background-repeat: repeat-x;
	overflow: hidden;
}

.RadMenu .rmVertical .rmSeparator .rmText,
.RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText
{
	height: auto;
	width: auto;
	padding-bottom: 2px;
}

*+html .RadMenu .rmSeparator .rmText,   /* IE7 separator height problem */
*+html .RadMenu .rmVertical .rmSeparator .rmText,
*+html .RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText
{
	height: 2px;
	padding: 0;
}

* html .RadMenu .rmVertical .rmSeparator { height: 3px; }
* html .RadMenu .rmVertical .rmSeparator .rmText { height: auto; padding: 2px 0 0; }
* html .RadMenu .rmHorizontal .rmSeparator .rmText { padding: 0; }
* html .RadMenu .rmHorizontal .rmVertical .rmSeparator { height: 3px; }
* html .RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText { height: 2px; }

.RadMenu .rmRootGroup .rmSeparator .rmText
{
	margin: 1px 12px;
}

.RadMenu .rmRootGroup .rmVertical .rmSeparator .rmText,
.RadMenu_Context .rmVertical .rmSeparator .rmText
{
	margin: 1px 2px 1px 31px;
}

.RadMenu_rtl .rmRootGroup .rmVertical .rmSeparator .rmText,
.RadMenu_Context_rtl .rmVertical .rmSeparator .rmText
{
	margin: 1px 31px 1px 2px;
}

.RadMenu .rmHorizontal .rmSeparator .rmText,
.RadMenu .rmVertical .rmHorizontal .rmSeparator .rmText
{
	margin: 2px 0 0;
	height: 20px;
	width: 2px;
}

* html .RadMenu .rmHorizontal .rmVertical .rmSeparator .rmText
{
	zoom: 1;
}

/* </separators> */

/* <scroll arrows> */

.RadMenu .rmLeftArrow,
.RadMenu .rmRightArrow
{
	width: 10px;
	height: 24px;
}

.RadMenu .rmTopArrow,
.RadMenu .rmBottomArrow
{
	height: 10px;
	width: 100%;
}

/* </scroll arrows> */

/* </base styles> */

/* END Telerik.Web.UI.Skins.Menu.css */
/* START Telerik.Web.UI.Skins.Ajax.css */
/* Telerik RadAjaxLoadingPanel Common CSS */

.RadAjax .raDiv,
.RadAjax .raColor
{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
}

.RadAjax .raDiv
{
	position:relative;
	z-index:2;
	background-color:transparent;
	background-position:center center;
	background-repeat:no-repeat;
}

.RadAjax .raColor
{
	position:absolute;
	top:0;
	left:0;
	z-index:1;
	background-image:none;
}

.RadAjax .raTransp
{
	zoom:1;
}

.RadAjax .raTop
{
	background-position:center top;
}

.RadAjax .raTopLeft
{
	background-position:left top;
}

.RadAjax .raTopRight
{
	background-position:right top;
}

.RadAjax .raLeft
{
	background-position:left center;
}

.RadAjax .raRight
{
	background-position:right center;
}

.RadAjax .raBottom
{
	background-position:center bottom;
}

.RadAjax .raBottomLeft
{
	background-position:left bottom;
}

.RadAjax .raBottomRight
{
	background-position:right bottom;
}

.RadAjax div.raNone
{
	background-image:none;
}

* html .RadAjaxUpdatedElement select
{
	visibility:hidden !important;
}
/* END Telerik.Web.UI.Skins.Ajax.css */
