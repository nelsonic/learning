$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });

});

// ******** HTML ********
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Slide Panel</title>
//         <script type="text/javascript" src="script.js"></script>
//         <link rel="stylesheet" type="text/css" href="stylesheet.css"></link>
//     </head>
//     <body>
//         <div class="panel">
//         <br />
//         <br />
//         <p>Now you see me!</p>
//         </div>
//         <p class="slide"><div class="pull-me">Slide Up/Down</div></p>
//     </body>
// </html>
//
// ******** /HTML ********
//
// ******** CSS ********
// body {
//     margin:0 auto;
//     padding:0;
// 	width:200px;
//     text-align:center;
// }
// .pull-me{
//     -webkit-box-shadow: 0 0 8px #FFD700;
//     -moz-box-shadow: 0 0 8px #FFD700;
//     box-shadow: 0 0 8px #FFD700;
//     cursor:pointer;
// }
// .panel {
// 	background: #ffffbd;
//     background-size:90% 90%;
//     height:300px;
// 	display:none;
//     font-family:garamond,times-new-roman,serif;
// }
// .panel p{
//     text-align:center;
// }
// .slide {
// 	margin:0;
// 	padding:0;
// 	border-top:solid 2px #cc0000;
// }
// .pull-me {
// 	display:block;
//     position:relative;
//     right:-25px;
//     width:150px;
//     height:20px;
// 	font-family:arial,sans-serif;
//     font-size:14px;
// 	color:#ffffff;
//     background:#cc0000;
// 	text-decoration:none;
//     -moz-border-bottom-left-radius:5px;
//     -moz-border-bottom-right-radius:5px;
//     border-bottom-left-radius:5px;
//     border-bottom-right-radius:5px;
// }
// .pull-me p {
//     text-align:center;
// }
//
// ******** /CSS ********
