<!DOCTYPE html>
<html>
<head>
	<title>{widgetName}</title>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

	<link rel="stylesheet" href="_testsuite_/css/style.css" type="text/css" />
</head>
<body>
	<div class="statusBar">
		<span class="numTestsDone">0</span>/<span class="numTests">0</span> tests,
		<span class="numFailed">0</span> failed (<span class="percentFailed">0</span>%)
		<span class="notCustomConfigured" style="display:none; color:#FBB;">[not configured]</span>
	</div>

	<a href="http://w3.org" class="copyright" title="HTML5 Logo by W3C">
		<img src="_testsuite_/img/logo.png" alt="HTML5 Logo by W3C" />
	</a>

	<div class="content"></div>
	<div id="dbg" style="color:red;"></div>

	<div class="manualTest">
		<h1 class="testName"></h1>
		<div class="whatToDo">
			<h1>What to do?</h1>
			<p class="text"></p>
			<button class="goButton">GO</button>
			<p class="testInfo"></p>
		</div>

		<div class="timeout">
			<h1>Timeout</h1>
			<p>
				Test automatically fails in:
				<span class="countdown"><span class="minutes">0:00</span> min</span>
				<!--<button class="failButton">Fail Now</button>i dont know how to implement this-->
			</p>
		</div>

		<div class="result">
			<h1>What should have happened?</h1>
			<p class="text"></p>
			<button class="yesButton">Yes</button>
			<button class="noButton">No</button>
		</div>
	</div>

	<button id="backButton" onclick="window.parent.showList()">BACK</button>

	<div id="loading">Loading tests...</div>

	<div id="statsOverlay"></div>

	<script type="text/javascript" src="_testsuite_/js/embed.js"></script>

	<script type="text/javascript" src="_testsuite_/js/doh2/doh.js"></script>
	<script type="text/javascript" src="_testsuite_/js/doh2/config.js"></script>
	<script type="text/javascript" src="_testsuite_/js/doh2/util.js"></script>

	<script type="text/javascript" src="_testsuite_/js/util.js"></script>

	<script type="text/javascript" src="_testsuite_/js/doh2/deferred.js"></script>
	<script type="text/javascript" src="_testsuite_/js/doh2/assert.js"></script>
	<script type="text/javascript" src="_testsuite_/js/ui.js"></script>
	<script type="text/javascript" src="_testsuite_/js/doh2_ui.js"></script>
	<script type="text/javascript" src="_testsuite_/js/dohx.js"></script>
	<script type="text/javascript" src="_testsuite_/js/config.js"></script>
	<script type="text/javascript">
		var TEST_FILE = "{testFile}";
	</script>
	<script type="text/javascript" src="_testsuite_/js/loader.js"></script>
</body>
</html>
