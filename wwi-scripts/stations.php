<?php
chdir(dirname(__FILE__));
date_default_timezone_set("Asia/Manila");
// stations
$list = array(
          array("ca-ky", "mw012", "Kaybiga, Caloocan City"),
          array("ca-up", "mw007", "U. Plata, Caloocan City"),
          array("lp-pa", "mw014", "Pamplona, Las Pinas City"),
          array("mk-fp", "makati05", "Brgy. Forbes Park, Makati City"),
          array("mk-gd", "mo004", "Guadalupe, Makati City"),
          array("mk-ch", "makati02", "Makati City Hall, Makati City"),
          array("mk-pb", "makati06", "Brgy. Pembo, Makati City"),
          array("mk-pi", "makati07", "Brgy. Pinagkaisahan, Makati City"),
          array("mk-sa", "makati03", "Brgy. San Antonio, Makati City"),
          array("mk-sl", "makati01", "Brgy. San Lorenzo, Makati City"),
          array("mk-wr", "makati04", "Brgy. West Rembo, Makati City"),
          array("mn-qa", "mw017", "Quirino Avenue, Manila"),
          array("mr-ng", "mo001", "Nangka, Marikina City"),
          array("nv-nv", "mw008", "Navotas, Navotas City"),
          array("pq-kb", "mw013", "Kabihasnan, Paranaque"),
          array("pq-si", "mw015", "San Isidro, Sucat, Paranaque"),
          array("pa-mv", "mw016", "Merville, Pasay City"),
          array("pg-dp", "mw028", "Brgy. dela Paz, Pasig City"),
          array("pg-mf", "mw006", "Manggahan Floodway, Pasig City"),
          array("qc-mo", "MOIP", "Loyola Heights, Quezon City"),
          array("lp-sl", "mw001", "Southland, Talon Uno, Las Pinas City"),
          array("qc-hs", "mw002", "Brgy. Holy Spirit, Quezon City"),
          array("qc-km", "mw003", "Brgy. Kamuning, Quezon City"),
          array("qc-mn", "mw004", "Brgy. Mindanao Avenue, Quezon City"),
          array("qc-py", "mw018", "Brgy. Payatas B, Quezon City"),
          array("sj-fb", "mw011", "F. Blumentrit, San Juan"),
          array("ty-gf", "mw010", "Gov. Frobes, Tayuman"),
          array("va-ma", "mw009", "Malinta, Valenzuela"),
          array("ag-sv", "mw024", "Brgy. San Vicente, Angono, Rizal"),
          array("at-sl", "mw027", "Brgy. San Luis, Antipolo, Rizal"),
          array("at-sr", "mw021", "Brgy. San Roque, Antipolo City, Rizal"),
          array("at-sa", "mw005", "Brgy. Sumulong Avenue, Antipolo, Rizal"),
          array("pi-ma", "mw023", "Brgy. Malaya, Pililla, Rizal"),
          array("rd-sj", "mw019", "Brgy. San Jose, Rodriguez, Rizal"),
          array("sm-am", "mw020", "Brgy. Ampid, San Mateo, Rizal"),
          array("tt-tp", "mw022", "Tapayan Pumping Station, Taytay, Rizal"),
          array("cv-cc", "mw026", "Corregidor Island, Cavite City"),
          array("bk-da", "zipzone", "Dahilayan, Bukidnon"),
          array("co-xu", "xuws1", "Xavier University, Cagayan de Oro City"),
          array("dc-mo", "MOD", "Matina Hills, Davao City"),
          array("kr-nm", "mo003", "Notre Dame of Marbel University, Koronadal City"),
          array("zc-az", "mo002", "Ateneo de Zamboanga, Zamboanga City")
        );

// <head>
$title  = '  <title>Observation Stations - Weather Watch Initiative (Manila Observatory)</title>';
$meta   = '  <meta name="description" content="Local Philippine weather as processed by the Manila Observatory"/>'."\n".
          '  <meta charset="UTF-8"/>';
$style  = '  <link href="./wwi-styles/default.css" rel="stylesheet" type="text/css"/>';
$script = '  <script src="./wwi-scripts/stations.js" type="text/javascript"></script>';

$head   = '<head>'."\n".$title."\n".$meta."\n".$style."\n".$script."\n".'</head>';
// <body>
$header = '  <div class="header">'."\n".
          '    <img alt="Manila Observatory Logo" class="left" src="./wwi-images/logo.png"/>'."\n".
          '    <div class="left">'."\n".
          '      <h1>Manila Observatory</h1>'."\n".
          '      <p>Ateneo de Manila University Campus</p>'."\n".
          '      <p>Loyola Heights, Quezon City, Philippines</p>'."\n".
          '    </div>'."\n".
          '    <div class="left head-contact">'."\n".
          '      <p>Tel: (632) 426-5921 / 426-0837 / 426-6495</p>'."\n".
          '      <p>Fax: (632) 426-0847 / 426-6141</p>'."\n".
          '      <p>Email: <a href="#" title="Manila Observatory email address">manila@observatory.ph</a></p>'."\n".
          '    </div>'."\n".
          '  </div>';
$navigation = '  <div class="nav">'."\n".
              '    <ul>'."\n".
              '      <li><a href="./index.html" title="Observation Stations - Graphs and Information">Quick View</a></li>'."\n".
              '      <li class="active">Stations</li>'."\n".
              '      <li><a href="./models.html" title="Model Results - Forecasts and Maps">Models</a></li>'."\n".
              '      <li><a href="./satellites.html" title="Remote Sensing - Satellite Images">Satellites</a></li>'."\n".
              '      <li><a href="./climate.html" title="Philippine Climate Information">Climate</a></li>'."\n".
              '      <li><a href="#" title="Manila Observatory Reports Archive">Reports</a></li>'."\n".
              '    </ul>'."\n".
              '    <a class="right" href="faq.html" title="Frequently Asked Questions">FAQ</a>'."\n".
              '  </div>';
$selectors = '  <div class="selectors">'."\n".
             '    <div class="st-options">'."\n".
             '      <table class="left" id="mm">'."\n".
             '        <tr>'."\n".
             '          <th><span class="region-group" onmousedown="stselect(\'mm\')">Metro Manila</span></th>'."\n".
             '        </tr>'."\n".
             '        <tr>'."\n".
             '          <td>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Caloocan</span></li>'."\n".
             '              <li><a href="#ca-ky" title="Kaybiga, Caloocan">Kaybiga</a></li>'."\n".
             '              <li><a href="#ca-up" title="U Plata, Caloocan">U. Plata (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Las Pinas</span></li>'."\n".
             '              <li><a href="#lp-pa" title="Pamplona, Las Pinas">Pamplona (Caltex)</a></li>'."\n".
             '              <li><a href="#lp-sl" title="Southland, Las Pinas">Southland, Talon Uno</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Makati</span></li>'."\n".
             '              <li><a href="#mk-fp" title="Brgy Forbes Park, Makati City">Forbes Park (Brgy.)</a></li>'."\n".
             '              <li><a href="#mk-gd" title="Guadalupe, Makati City">Guadalupe</a></li>'."\n".
             '              <li><a href="#mk-ch" title="Makati City Hall, Makati City">Makati City Hall</a></li>'."\n".
             '              <li><a href="#mk-pb" title="Brgy Pembo, Makati City">Pembo (Brgy.)</a></li>'."\n".
             '              <li><a href="#mk-pi" title="Brgy Pinagkaisahan, Makati City">Pinagkaisahan (Brgy.)</a></li>'."\n".
             '              <li><a href="#mk-sa" title="Brgy San Antonio, Makati City">San Antonio (Brgy.)</a></li>'."\n".
             '              <li><a href="#mk-sl" title="Brgy San Lorenzo, Makati City">San Lorenzo (Brgy.)</a></li>'."\n".
             '              <li><a href="#mk-wr" title="Brgy West Rembo, Makati City">West Rembo (Brgy.)</a></li>'."\n".
             '            </ul>'."\n".
             '          </td>'."\n".
             '          <td rowspan="2">'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Manila</span></li>'."\n".
             '              <li><a href="#mn-qa" title="Quirino Avenue, Manila">Quirino Avenue (Caltex)</a></li>'."\n".
             '              <li><a href="#ty-gf" title="Gov Forbes, Tayuman">Tayuman (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Marikina</span></li>'."\n".
             '              <li><a href="#mr-ng" title="Nangka, Marikina City">Nangka</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Navotas</span></li>'."\n".
             '              <li><a href="#nv-nv" title="Navotas">Navotas City (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Paranaque</span></li>'."\n".
             '              <li><a href="#pq-kb" title="Kabihasnan, Paranaque">Kabihasnan (Caltex)</a></li>'."\n".
             '              <li><a href="#pq-si" title="San Isidro, Paranaque">San Isidro (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Pasay</span></li>'."\n".
             '              <li><a href="#pa-mv" title="Merville, Pasay City">Merville (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '          </td>'."\n".
             '          <td rowspan="2">'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Pasig</span></li>'."\n".
             '              <li><a href="#pg-dp" title="Brgy dela Paz, Pasig City">dela Paz (Brgy.)</a></li>'."\n".
             '              <li><a href="#pg-mf" title="Manggahan Floodway, Pasig City">Manggahan Floodway (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Quezon City</span></li>'."\n".
             '              <li><a href="#qc-mo" title="Manila Observatory, Quezon City">Ateneo de Manila</a></li>'."\n".
             '              <li><a href="#qc-hs" title="Brgy Holy Spirit, Quezon City">Holy Spirit (Caltex)</a></li>'."\n".
             '              <li><a href="#qc-km" title="Brgy Kamuning, Quezon City">Kamuning (Caltex)</a></li>'."\n".
             '              <li><a href="#qc-mn" title="Mindanao Avenue, Quezon City">Mindanao Avenue (Caltex)</a></li>'."\n".
             '              <li><a href="#qc-py" title="Brgy Payatas B, Quezon City">Payatas B (Brgy.)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">San Juan</span></li>'."\n".
             '              <li><a href="#sj-fb" title="F Blumentrit, San Juan">F. Blumentrit (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Valenzuela</span></li>'."\n".
             '              <li><a href="#va-ma" title="Malinta, Valenzuela">Malinta (Malinta)</a></li>'."\n".
             '            </ul>'."\n".
             '          </td>'."\n".
             '        </tr>'."\n".
             '      </table>'."\n".
             '      <table class="left" id="rz">'."\n".
             '        <tr>'."\n".
             '          <th><span class="region-group" onmousedown="stselect(\'rz\')">Rizal</span></th>'."\n".
             '        </tr>'."\n".
             '        <tr>'."\n".
             '          <td>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Angono</span></li>'."\n".
             '              <li><a href="#ag-sv" title="Brgy San Vicente, Angono">San Vicente (Brgy.)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Antipolo</span></li>'."\n".
             '              <li><a href="#at-sl" title="Brgy San Luis, Antipolo">San Luis (Brgy.)</a></li>'."\n".
             '              <li><a href="#at-sr" title="Brgy San Roque, Antipolo">San Roque (Brgy.)</a></li>'."\n".
             '              <li><a href="#at-sa" title="Sumulong Avenue, Antipolo">Sumulong Avenue (Caltex)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Pililla</span></li>'."\n".
             '              <li><a href="#pi-ma" title="Brgy Malaya, Pililla">Malaya (Brgy.)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Rodriguez</span></li>'."\n".
             '                <li><a href="#rd-sj" title="Brgy San Jose, Rodriguez">San Jose (Brgy.)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li>San Mateo</li>'."\n".
             '                <li><a href="#sm-am" title="Brgy Ampid, San Mateo">Ampid (Brgy.)</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Taytay</span></li>'."\n".
             '              <li><a href="#tt-tp" title="Tapayan Pumping Station, Taytay">Tapayan Pumping Station</a></li>'."\n".
             '            </ul>'."\n".
             '          </td>'."\n".
             '        </tr>'."\n".
             '      </table>'."\n".
             '      <table class="left" id="mn">'."\n".
             '        <tr>'."\n".
             '          <th>Cavite</th>'."\n".
             '        </tr>'."\n".
             '        <tr>'."\n".
             '          <td>'."\n".
             '            <ul>'."\n".
             '              <li>Cavite City</li>'."\n".
             '              <li><a href="#cv-cc" title="Corregidor Island, Cavite City">Corregidor Island</a></li>'."\n".
             '            </ul>'."\n".
             '          </td>'."\n".
             '        </tr>'."\n".
             '        <tr>'."\n".
             '          <th><span class="region-group" onmousedown="stselect(\'mn\')">Mindanao</span></th>'."\n".
             '        </tr>'."\n".
             '        <tr>'."\n".
             '          <td>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Bukidnon</span></li>'."\n".
             '              <li><a href="#bk-da" title="Dahilayan Adventure Park, Bukidnon">Dahilayan</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Cagayan de Oro</span></li>'."\n".
             '              <li><a href="#co-xu" title="Xavier University, Cagayan de Oro">Xavier University</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Davao City</span></li>'."\n".
             '              <li><a href="#dc-mo" title="Matina Hills, Davao City">Matina Hills</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Koronadal</span></li>'."\n".
             '              <li><a href="#kr-nm" title="Notre Dame of Marbel, Koronadal">Notre Dame of Marbel</a></li>'."\n".
             '            </ul>'."\n".
             '            <ul>'."\n".
             '              <li><span class="group">Zamboanga City</span></li>'."\n".
             '              <li><a href="#zc-az" title="Ateneo de Zamboanga, Zamboanga City">Ateneo de Zamboanga</a></li>'."\n".
             '            </ul>'."\n".
             '          </td>'."\n".
             '        </tr>'."\n".
             '      </table>'."\n".
             '            <form class="left st-picks">'."\n".
             '             <input checked="checked" id="allstations" onmouseup="stselect(\'all\',this)" type="checkbox">All Stations</br></br>'."\n".
             '             <input checked="checked" onmousedown="pargraph(\'strain\',this)" type="checkbox">Rainfall</br>'."\n".
             '             <input onmousedown="pargraph(\'sttemp\',this)" type="checkbox">Temperature</br>'."\n".
             '             <input onmousedown="pargraph(\'stwind\',this)" type="checkbox">Wind</br>'."\n".
             '             <input onmousedown="pargraph(\'stsolar\',this)" type="checkbox">Solar Radiation</br>'."\n".
             '             <input onmousedown="pargraph(\'stbp\',this)" type="checkbox">Air Pressure</br>'."\n".
             '            </form>'."\n".
             '    </div>'."\n".
             '  </div>';
$st = '';
foreach($list as $l) { 
  $date_now_str = date('Y-m-d');
  $date_str = '1970-01-01';

  $datetime_csv = fopen('../wwi-data/graphs/day/'.$l[1].'/datetime.csv', "r");
  if ($datetime_csv) {
    $date_str = date_format(DateTime::createFromFormat('Y-m-d H:i', fgets($datetime_csv)), 'Y-m-d');
    fclose($datetime_csv);
  }
  if ($date_str == $date_now_str) {
    $st = $st."\n".
    '    <div id="'.$l[0].'">'."\n".
    '      <h4>'.$l[2].'</h4> <a href="#">&uarr; back to top &uarr;</a>'."\n".
    '      <img alt="Rainfall time series for '.$l[2].'" id="'.$l[0].'strain" src="./wwi-data/graphs/day/'.$l[1].'/rain.png"/>'."\n".
    '      <img alt="Temperature time series for '.$l[2].'" id="'.$l[0].'sttemp" src="./wwi-data/graphs/day/'.$l[1].'/temp.png"/>'."\n".
    '      <img alt="Wind time series for '.$l[2].'" id="'.$l[0].'stwind" src="./wwi-data/graphs/day/'.$l[1].'/ws.png"/>'."\n".
    '      <img alt="Solar Radiation time series for '.$l[2].'" id="'.$l[0].'stsolar" src="./wwi-data/graphs/day/'.$l[1].'/solar.png"/>'."\n".
    '      <img alt="Barometric Pressure time series for '.$l[2].'" id="'.$l[0].'stbp" src="./wwi-data/graphs/day/'.$l[1].'/bp.png"/>'."\n".
    '    </div>';
  }
}

$stations = '  <div class="stations">'."\n".$st."\n".'  </div>';
$body = '<body>'."\n".'<div class="root">'."\n".$header."\n".$navigation."\n".$selectors."\n".$stations."\n".'</div>'."\n".'</body>';
// index.html output
$wwi = '<!DOCTYPE html>'."\n".'<html>'."\n".$head."\n".$body."\n".'</html>';
$output = fopen('../stations.html', 'w');
fwrite($output, $wwi);
fclose($output);
?>