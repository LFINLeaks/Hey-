<?php
$sounds = [
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/029/original/motherfuck.wav?1469744385",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/002/original/this-guy-fucks.wav?1469744419",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/006/original/eat-the-fish.wav?1469744321",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/030/original/shit-fight.wav?1469744305",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/035/original/two-shitty-commas.wav?1469744313",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/055/original/pied-piper.wav?1469744471",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/056/original/i'm-richard.wav?1469744053",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/037/original/doors-of-billionaire.wav?1469744332",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/013/original/apple-maps-bad.wav?1469744107",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/033/original/tell-something.wav?1469744317",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/031/original/yikes.wav?1469744275",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/057/original/this-pied-piper.wav?1469744030",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/036/original/clowns.wav?1469744321",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/505/original/aviato.mp3?1469744095",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/034/original/financially-ruined.wav?1469744300",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/058/original/word-better.wav?1469744253",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/032/original/after-lunch.wav?1469744320",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/507/original/fucked-up.mp3?1469744259",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/562/original/snack_dick.mp3?1469744421",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/508/original/lets-pivot.mp3?1469744427",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/506/original/pivot.mp3?1469744284",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/511/original/kind-invitation.mp3?1469744039",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/509/original/which-one.mp3?1469744221",
  "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/510/original/underage-kid.mp3?1469744041"];

  foreach( $sounds as $sound) {
    //echo $sound;
    //  exec("curl -O $sound");
  }


  foreach (glob("*.wav*") as $filename) {
    $oldname = $filename;
    $filename = explode('?',$filename);
    echo "NEW : $filename[0] ";
    echo "OLD : $oldname ";
    rename($oldname,$filename[0]);
  }

  foreach (glob("*.mp3*") as $filename) {
    $oldname = $filename;
    $filename = explode('?',$filename);
    echo "NEW : $filename[0] ";
    echo "OLD : $oldname ";
    rename($oldname,$filename[0]);
  }
