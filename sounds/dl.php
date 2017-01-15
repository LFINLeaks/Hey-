<?php
$sounds = ["https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/493/original/You're_god_damn_right.wav?1469744417", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/491/original/Yeah_Bitch!.wav?1469744031", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/490/original/Now_say_my_name.wav?1469744424", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/496/original/Hail_Hitler_Bitch.wav?1469744433", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/495/original/I'm_the_one_who_knocks.wav?1469743975", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/489/original/I'm_the_danger.wav?1469744393", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/750/original/dbbs.wav?1469744428", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/494/original/Better_Call_Saul.wav?1469744408", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/492/original/I_will_kill_your_wife__I_will_kill_your_son.wav?1469744306", "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/497/original/A_man_provides.wav?1469744364"];

  foreach( $sounds as $sound) {
    //echo $sound;
    //exec("curl -O $sound");
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
