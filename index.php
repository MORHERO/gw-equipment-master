<? //include_once('./modules/get_character.php'); ?>

<!DOCTYPE html>
<html>
<head>
	<title>CHARACTER CREATION</title>
	<meta charset="utf-8">
	<?php
		include 'templates/styles.php';
	?>
</head>
<body>
	<?php
		include 'templates/header.php';
		include 'templates/navigation.php';
	?>

	<main>
		<section id="create-item">
			<div class="flex">
				<div class="wrap">
					<button task="activate_ic">Create Item</button>
				</div>
			</div>
		</section>
		<section id="search-item">
			
		</section>
	</main>
	<?php
		include 'modules/parts/overlays.php';
		include 'templates/footer.php';
		include 'templates/scripts.php';
	?>
</body>
</html>