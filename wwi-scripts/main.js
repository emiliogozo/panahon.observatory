var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) { vars[key] = value; });

var urlmap = vars["map"];
var urlsts = vars["stations"];

var selectedsts = "MOIP";
var mosts = 1;
var mksts = 1;
var mwsts = 1;
var otsts = 1;
var stpara = "rain";

function cmap(d) {
  switch (d) {
    case 'mm': document.getElementById('topo').innerHTML = '<img alt="Topographical Map of Metro Manila and Neighborhood" src="./wwi-images/mm400.png" />';
      document.getElementById('stations-link').href = './wwi-styles/stations-mm.css';
      document.getElementById('qoptions').style.display = 'none';
      document.getElementById('qmorph').style.display = 'none';
      document.getElementById('qcheck').checked = false; break;
    case 'ph': document.getElementById('topo').innerHTML = '<img alt="Topographical Map of the Philippines" src="./wwi-images/ph400.png" />';
      document.getElementById('stations-link').href = './wwi-styles/stations-ph.css';
      document.getElementById('qoptions').style.display = 'block'; break;
  }
}

function tooltip(s, e) {
  xoffset = document.getElementById('root-node').offsetLeft;
  yoffset = document.getElementById('root-node').offsetTop;
  xlost = document.documentElement.scrollLeft;
  ylost = document.documentElement.scrollTop;
  document.getElementById('st-tooltip').innerHTML = document.getElementById(s + '-tooltip').innerHTML;
  document.getElementById('st-tooltip').style.display = 'block';
  document.getElementById('st-tooltip').style.left = e.clientX + xlost - xoffset + 20 + 'px';
  document.getElementById('st-tooltip').style.top = e.clientY + ylost - yoffset - 220 + 'px';
}

function toolreset() {
  document.getElementById('st-tooltip').style.display = 'none';
}

function mapparam(d) {
  switch (d) {
    case 'rain': document.getElementById('stations-color').href = './wwi-styles/stations-color-rain.css';
      document.getElementById('colorbar').innerHTML = document.getElementById('rainbar').innerHTML; break;
    case 'racc': document.getElementById('stations-color').href = './wwi-styles/stations-color-racc.css';
      document.getElementById('colorbar').innerHTML = document.getElementById('rainaccbar').innerHTML; break;
    case 'tmp': document.getElementById('stations-color').href = './wwi-styles/stations-color-tmp.css';
      document.getElementById('colorbar').innerHTML = document.getElementById('tempbar').innerHTML; break;
  }
}

function stcollapse() {
  if (document.getElementById('st-options').style.display == 'block') {
    document.getElementById('st-options').style.display = 'none';
  } else {
    document.getElementById('st-options').style.display = 'block';
  }
}

function stdefault() {
  document.getElementById('colorbar').innerHTML = document.getElementById('rainbar').innerHTML;
  switch (urlmap) {
    case 'mm': document.getElementById('mmradio').checked = true;
      document.getElementById('topo').innerHTML = '<img alt="Topographical Map of Metro Manila and Neighborhood" src="./wwi-images/mm400.png" />';
      document.getElementById('stations-link').href = './wwi-styles/stations-mm.css'; break;
    default: document.getElementById('phradio').checked = true;
      document.getElementById('topo').innerHTML = '<img alt="Topographical Map of the Philippines" src="./wwi-images/ph400.png" />';
      document.getElementById('stations-link').href = './wwi-styles/stations-ph.css'; break;
  }
  switch (urlsts) {
    case 'mw': document.getElementById('allstations').checked = false;
      document.getElementById('mostations').checked = false;
      document.getElementById('mkstations').checked = false;
      document.getElementById('otstations').checked = false;
      document.getElementById('mwstations').checked = true;
      stselect('mo');
      stselect('mk');
      stselect('ot');
      document.getElementById('qc-hs').style.color = "#ffffff";
      document.getElementById('qc-km').style.color = "#ffffff";
      document.getElementById('qc-mn').style.color = "#ffffff";
      document.getElementById('at-sa').style.color = "#ffffff";
      document.getElementById('pg-dp').style.color = "#ffffff";
      document.getElementById('pg-mf').style.color = "#ffffff";
      document.getElementById('ca-ky').style.color = "#ffffff";
      document.getElementById('ca-up').style.color = "#ffffff";
      document.getElementById('nv-nv').style.color = "#ffffff";
      document.getElementById('va-ma').style.color = "#ffffff";
      document.getElementById('ty-gf').style.color = "#ffffff";
      document.getElementById('sj-fb').style.color = "#ffffff";
      document.getElementById('pq-kb').style.color = "#ffffff";
      document.getElementById('lp-pa').style.color = "#ffffff";
      document.getElementById('lp-sl').style.color = "#ffffff";
      document.getElementById('pq-si').style.color = "#ffffff";
      document.getElementById('pa-mv').style.color = "#ffffff";
      document.getElementById('mn-qa').style.color = "#ffffff";
      document.getElementById('qc-py').style.color = "#ffffff";
      document.getElementById('rd-sj').style.color = "#ffffff";
      document.getElementById('at-sl').style.color = "#ffffff";
      document.getElementById('at-sr').style.color = "#ffffff";
      document.getElementById('tt-tp').style.color = "#ffffff";
      document.getElementById('pi-ma').style.color = "#ffffff";
      document.getElementById('ag-sv').style.color = "#ffffff";

      document.getElementById('mw001').style.padding = "3px";
      document.getElementById('mw002').style.padding = "3px";
      document.getElementById('mw003').style.padding = "3px";
      document.getElementById('mw004').style.padding = "3px";
      document.getElementById('mw005').style.padding = "3px";
      document.getElementById('mw028').style.padding = "3px";
      document.getElementById('mw006').style.padding = "3px";
      document.getElementById('mw012').style.padding = "3px";
      document.getElementById('mw007').style.padding = "3px";
      document.getElementById('mw008').style.padding = "3px";
      document.getElementById('mw009').style.padding = "3px";
      document.getElementById('mw010').style.padding = "3px";
      document.getElementById('mw011').style.padding = "3px";
      document.getElementById('mw013').style.padding = "3px";
      document.getElementById('mw014').style.padding = "3px";
      document.getElementById('mw015').style.padding = "3px";
      document.getElementById('mw016').style.padding = "3px";
      document.getElementById('mw017').style.padding = "3px";
      document.getElementById('mw018').style.padding = "3px";
      document.getElementById('mw019').style.padding = "3px";
      document.getElementById('mw027').style.padding = "3px";
      document.getElementById('mw021').style.padding = "3px";
      document.getElementById('mw022').style.padding = "3px";
      document.getElementById('mw023').style.padding = "3px";
      document.getElementById('mw024').style.padding = "3px"; break;
  }
  document.getElementById('qc-mo').style.backgroundColor = '#446f90';
  document.getElementById('prain').innerHTML = document.getElementById('MOIP-prain').innerHTML;
  document.getElementById('ptemp').innerHTML = document.getElementById('MOIP-ptemp').innerHTML;
  document.getElementById('pwind').innerHTML = document.getElementById('MOIP-pwind').innerHTML;
  document.getElementById('ppres').innerHTML = document.getElementById('MOIP-ppres').innerHTML;
  document.getElementById('pwriteup').innerHTML = document.getElementById('MOIP-rain').innerHTML;
  //  document.getElementById('co-xu').style.backgroundColor = '#446f90';
  //  document.getElementById('prain').innerHTML = document.getElementById('xuws2-prain').innerHTML;
  //  document.getElementById('ptemp').innerHTML = document.getElementById('xuws2-ptemp').innerHTML;
  //  document.getElementById('pwind').innerHTML = document.getElementById('xuws2-pwind').innerHTML;
  //  document.getElementById('ppres').innerHTML = document.getElementById('xuws2-ppres').innerHTML;
  //  document.getElementById('pwriteup').innerHTML = document.getElementById('xuws2-rain').innerHTML;
}

function stselect(p, box) {
  switch (p) {
    case 'mo': var scolor = (mosts == 1) ? "#000000" : "#ffffff";
      var dotmo = (mosts == 1) ? "0" : "3px";
      mosts = (mosts == 1) ? 0 : 1;
      if (mosts == 0) { document.getElementById('allstations').checked = false; };
      document.getElementById('qc-mo').style.color = scolor;
      document.getElementById('dc-mo').style.color = scolor;
      document.getElementById('co-xu').style.color = scolor;
      document.getElementById('mr-ng').style.color = scolor;
      document.getElementById('zc-az').style.color = scolor;
      document.getElementById('kr-nm').style.color = scolor;
      document.getElementById('mk-gd').style.color = scolor;

      document.getElementById('MOIP').style.padding = dotmo;
      document.getElementById('MOD').style.padding = dotmo;
      document.getElementById('xuws1').style.padding = dotmo;
      document.getElementById('mo001').style.padding = dotmo;
      document.getElementById('mo002').style.padding = dotmo;
      document.getElementById('mo003').style.padding = dotmo;
      document.getElementById('mo004').style.padding = dotmk;
      if (mosts == 1 && mksts == 1 && mwsts == 1 && otsts == 1) {
        document.getElementById('allstations').checked = true;
        document.getElementById('MOIP').style.padding = "0";
        document.getElementById('MOD').style.padding = "0";
        document.getElementById('xuws1').style.padding = "0";
        document.getElementById('mo001').style.padding = "0";
        document.getElementById('mo002').style.padding = "0";
        document.getElementById('mo003').style.padding = "0";
        document.getElementById('mo004').style.padding = "0";
        document.getElementById('makati01').style.padding = "0";
        document.getElementById('makati02').style.padding = "0";
        document.getElementById('makati03').style.padding = "0";
        document.getElementById('makati04').style.padding = "0";
        document.getElementById('makati05').style.padding = "0";
        document.getElementById('makati06').style.padding = "0";
        document.getElementById('makati07').style.padding = "0";
        document.getElementById('mw001').style.padding = "0";
        document.getElementById('mw002').style.padding = "0";
        document.getElementById('mw003').style.padding = "0";
        document.getElementById('mw004').style.padding = "0";
        document.getElementById('mw005').style.padding = "0";
        document.getElementById('mw006').style.padding = "0";
        document.getElementById('mw007').style.padding = "0";
        document.getElementById('mw008').style.padding = "0";
        document.getElementById('mw009').style.padding = "0";
        document.getElementById('mw010').style.padding = "0";
        document.getElementById('mw011').style.padding = "0";
        document.getElementById('mw012').style.padding = "0";
        document.getElementById('mw013').style.padding = "0";
        document.getElementById('mw014').style.padding = "0";
        document.getElementById('mw015').style.padding = "0";
        document.getElementById('mw016').style.padding = "0";
        document.getElementById('mw017').style.padding = "0";
        document.getElementById('mw018').style.padding = "0";
        document.getElementById('mw019').style.padding = "0";
        document.getElementById('mw021').style.padding = "0";
        document.getElementById('mw022').style.padding = "0";
        document.getElementById('mw023').style.padding = "0";
        document.getElementById('mw024').style.padding = "0";
        document.getElementById('mw027').style.padding = "0";
        document.getElementById('mw028').style.padding = "0";
        document.getElementById('bk-da').style.padding = "0";
      }; break;
    case 'mk': var scolor = (mksts == 1) ? "#000000" : "#ffffff";
      var dotmk = (mksts == 1) ? "0" : "3px";
      mksts = (mksts == 1) ? 0 : 1;
      if (mksts == 0) { document.getElementById('allstations').checked = false; };
      document.getElementById('mk-sl').style.color = scolor;
      document.getElementById('mk-ch').style.color = scolor;
      document.getElementById('mk-sa').style.color = scolor;
      document.getElementById('mk-wr').style.color = scolor;
      document.getElementById('mk-fp').style.color = scolor;
      document.getElementById('mk-pb').style.color = scolor;
      document.getElementById('mk-pi').style.color = scolor;

      document.getElementById('makati01').style.padding = dotmk;
      document.getElementById('makati02').style.padding = dotmk;
      document.getElementById('makati03').style.padding = dotmk;
      document.getElementById('makati04').style.padding = dotmk;
      document.getElementById('makati05').style.padding = dotmk;
      document.getElementById('makati06').style.padding = dotmk;
      document.getElementById('makati07').style.padding = dotmk;
      if (mosts == 1 && mksts == 1 && mwsts == 1 && otsts == 1) {
        document.getElementById('allstations').checked = true;
        document.getElementById('MOIP').style.padding = "0";
        document.getElementById('MOD').style.padding = "0";
        document.getElementById('xuws1').style.padding = "0";
        document.getElementById('mo001').style.padding = "0";
        document.getElementById('mo002').style.padding = "0";
        document.getElementById('mo003').style.padding = "0";
        document.getElementById('mo004').style.padding = "0";
        document.getElementById('makati01').style.padding = "0";
        document.getElementById('makati02').style.padding = "0";
        document.getElementById('makati03').style.padding = "0";
        document.getElementById('makati04').style.padding = "0";
        document.getElementById('makati05').style.padding = "0";
        document.getElementById('makati06').style.padding = "0";
        document.getElementById('makati07').style.padding = "0";
        document.getElementById('mw001').style.padding = "0";
        document.getElementById('mw002').style.padding = "0";
        document.getElementById('mw003').style.padding = "0";
        document.getElementById('mw004').style.padding = "0";
        document.getElementById('mw005').style.padding = "0";
        document.getElementById('mw006').style.padding = "0";
        document.getElementById('mw007').style.padding = "0";
        document.getElementById('mw008').style.padding = "0";
        document.getElementById('mw009').style.padding = "0";
        document.getElementById('mw010').style.padding = "0";
        document.getElementById('mw011').style.padding = "0";
        document.getElementById('mw012').style.padding = "0";
        document.getElementById('mw013').style.padding = "0";
        document.getElementById('mw014').style.padding = "0";
        document.getElementById('mw015').style.padding = "0";
        document.getElementById('mw016').style.padding = "0";
        document.getElementById('mw017').style.padding = "0";
        document.getElementById('mw018').style.padding = "0";
        document.getElementById('mw019').style.padding = "0";
        document.getElementById('mw021').style.padding = "0";
        document.getElementById('mw022').style.padding = "0";
        document.getElementById('mw023').style.padding = "0";
        document.getElementById('mw024').style.padding = "0";
        document.getElementById('mw027').style.padding = "0";
        document.getElementById('mw028').style.padding = "0";
        document.getElementById('bk-da').style.padding = "0";
      }; break;
    case 'mw': var scolor = (mwsts == 1) ? "#000000" : "#ffffff";
      var dotmw = (mwsts == 1) ? "0" : "3px";
      mwsts = (mwsts == 1) ? 0 : 1;
      if (mwsts == 0) { document.getElementById('allstations').checked = false; };
      document.getElementById('qc-hs').style.color = scolor;
      document.getElementById('qc-km').style.color = scolor;
      document.getElementById('qc-mn').style.color = scolor;
      document.getElementById('at-sa').style.color = scolor;
      document.getElementById('pg-mf').style.color = scolor;
      document.getElementById('ca-up').style.color = scolor;
      document.getElementById('nv-nv').style.color = scolor;
      document.getElementById('va-ma').style.color = scolor;
      document.getElementById('ty-gf').style.color = scolor;
      document.getElementById('sj-fb').style.color = scolor;
      document.getElementById('pq-kb').style.color = scolor;
      document.getElementById('lp-pa').style.color = scolor;
      document.getElementById('lp-sl').style.color = scolor;
      document.getElementById('pq-si').style.color = scolor;
      document.getElementById('pa-mv').style.color = scolor;
      document.getElementById('mn-qa').style.color = scolor;
      document.getElementById('qc-py').style.color = scolor;
      document.getElementById('rd-sj').style.color = scolor;
      document.getElementById('at-sr').style.color = scolor;
      document.getElementById('tt-tp').style.color = scolor;
      document.getElementById('pi-ma').style.color = scolor;
      document.getElementById('ag-sv').style.color = scolor;
      document.getElementById('ag-sl').style.color = scolor;
      document.getElementById('pg-dp').style.color = scolor;
      document.getElementById('ca-ky').style.color = scolor;

      document.getElementById('mw001').style.padding = dotmw;
      document.getElementById('mw002').style.padding = dotmw;
      document.getElementById('mw003').style.padding = dotmw;
      document.getElementById('mw004').style.padding = dotmw;
      document.getElementById('mw005').style.padding = dotmw;
      document.getElementById('mw006').style.padding = dotmw;
      document.getElementById('mw007').style.padding = dotmw;
      document.getElementById('mw008').style.padding = dotmw;
      document.getElementById('mw009').style.padding = dotmw;
      document.getElementById('mw010').style.padding = dotmw;
      document.getElementById('mw011').style.padding = dotmw;
      document.getElementById('mw013').style.padding = dotmw;
      document.getElementById('mw014').style.padding = dotmw;
      document.getElementById('mw015').style.padding = dotmw;
      document.getElementById('mw016').style.padding = dotmw;
      document.getElementById('mw017').style.padding = dotmw;
      document.getElementById('mw018').style.padding = dotmw;
      document.getElementById('mw019').style.padding = dotmw;
      document.getElementById('mw021').style.padding = dotmw;
      document.getElementById('mw022').style.padding = dotmw;
      document.getElementById('mw023').style.padding = dotmw;
      document.getElementById('mw024').style.padding = dotmw;
      document.getElementById('mw012').style.padding = dotmw;
      document.getElementById('mw027').style.padding = dotmw;
      document.getElementById('mw028').style.padding = dotmw;


      if (mosts == 1 && mksts == 1 && mwsts == 1 && otsts == 1) {
        document.getElementById('allstations').checked = true;
        document.getElementById('MOIP').style.padding = "0";
        document.getElementById('MOD').style.padding = "0";
        document.getElementById('xuws1').style.padding = "0";
        document.getElementById('mo001').style.padding = "0";
        document.getElementById('mo002').style.padding = "0";
        document.getElementById('mo003').style.padding = "0";
        document.getElementById('mo004').style.padding = "0";
        document.getElementById('makati01').style.padding = "0";
        document.getElementById('makati02').style.padding = "0";
        document.getElementById('makati03').style.padding = "0";
        document.getElementById('makati04').style.padding = "0";
        document.getElementById('makati05').style.padding = "0";
        document.getElementById('makati06').style.padding = "0";
        document.getElementById('makati07').style.padding = "0";
        document.getElementById('mw001').style.padding = "0";
        document.getElementById('mw002').style.padding = "0";
        document.getElementById('mw003').style.padding = "0";
        document.getElementById('mw004').style.padding = "0";
        document.getElementById('mw005').style.padding = "0";
        document.getElementById('mw006').style.padding = "0";
        document.getElementById('mw007').style.padding = "0";
        document.getElementById('mw008').style.padding = "0";
        document.getElementById('mw009').style.padding = "0";
        document.getElementById('mw010').style.padding = "0";
        document.getElementById('mw011').style.padding = "0";
        document.getElementById('mw012').style.padding = "0";
        document.getElementById('mw013').style.padding = "0";
        document.getElementById('mw014').style.padding = "0";
        document.getElementById('mw015').style.padding = "0";
        document.getElementById('mw016').style.padding = "0";
        document.getElementById('mw017').style.padding = "0";
        document.getElementById('mw018').style.padding = "0";
        document.getElementById('mw019').style.padding = "0";
        document.getElementById('mw021').style.padding = "0";
        document.getElementById('mw022').style.padding = "0";
        document.getElementById('mw023').style.padding = "0";
        document.getElementById('mw024').style.padding = "0";
        document.getElementById('mw027').style.padding = "0";
        document.getElementById('mw028').style.padding = "0";
        document.getElementById('bk-da').style.padding = "0";
      }; break;
    case 'ot': var scolor = (otsts == 1) ? "#000000" : "#ffffff";
      var dotot = (otsts == 1) ? "0" : "3px";
      otsts = (otsts == 1) ? 0 : 1;
      if (otsts == 0) { document.getElementById('allstations').checked = false; };
      document.getElementById('bk-da').style.color = scolor;

      document.getElementById('bk-da').style.padding = dotot;
      if (mosts == 1 && mksts == 1 && mwsts == 1 && otsts == 1) {
        document.getElementById('allstations').checked = true;
        document.getElementById('MOIP').style.padding = "0";
        document.getElementById('MOD').style.padding = "0";
        document.getElementById('xuws1').style.padding = "0";
        document.getElementById('mo001').style.padding = "0";
        document.getElementById('mo002').style.padding = "0";
        document.getElementById('mo003').style.padding = "0";
        document.getElementById('mo004').style.padding = "0";
        document.getElementById('makati01').style.padding = "0";
        document.getElementById('makati02').style.padding = "0";
        document.getElementById('makati03').style.padding = "0";
        document.getElementById('makati04').style.padding = "0";
        document.getElementById('makati05').style.padding = "0";
        document.getElementById('makati06').style.padding = "0";
        document.getElementById('makati07').style.padding = "0";
        document.getElementById('mw001').style.padding = "0";
        document.getElementById('mw002').style.padding = "0";
        document.getElementById('mw003').style.padding = "0";
        document.getElementById('mw004').style.padding = "0";
        document.getElementById('mw005').style.padding = "0";
        document.getElementById('mw006').style.padding = "0";
        document.getElementById('mw007').style.padding = "0";
        document.getElementById('mw008').style.padding = "0";
        document.getElementById('mw009').style.padding = "0";
        document.getElementById('mw010').style.padding = "0";
        document.getElementById('mw011').style.padding = "0";
        document.getElementById('mw012').style.padding = "0";
        document.getElementById('mw013').style.padding = "0";
        document.getElementById('mw014').style.padding = "0";
        document.getElementById('mw015').style.padding = "0";
        document.getElementById('mw016').style.padding = "0";
        document.getElementById('mw017').style.padding = "0";
        document.getElementById('mw018').style.padding = "0";
        document.getElementById('mw019').style.padding = "0";
        document.getElementById('mw021').style.padding = "0";
        document.getElementById('mw022').style.padding = "0";
        document.getElementById('mw023').style.padding = "0";
        document.getElementById('mw024').style.padding = "0";
        document.getElementById('mw027').style.padding = "0";
        document.getElementById('mw028').style.padding = "0";
        document.getElementById('bk-da').style.padding = "0";
      }; break;
    case 'all': var vis = (box.checked) ? '#000000' : '#ffffff';
      var chck = (box.checked) ? 0 : 1;
      mosts = chck;
      mksts = chck;
      mwsts = chck;
      otsts = chck;
      document.getElementById('mostations').checked = chck;
      document.getElementById('mkstations').checked = chck;
      document.getElementById('mwstations').checked = chck;
      document.getElementById('otstations').checked = chck;
      document.getElementById('qc-mo').style.color = vis;
      document.getElementById('dc-mo').style.color = vis;
      document.getElementById('co-xu').style.color = vis;
      document.getElementById('mr-ng').style.color = vis;
      document.getElementById('zc-az').style.color = vis;
      document.getElementById('kr-nm').style.color = vis;
      document.getElementById('mk-gd').style.color = vis;
      document.getElementById('mk-sl').style.color = vis;
      document.getElementById('mk-ch').style.color = vis;
      document.getElementById('mk-sa').style.color = vis;
      document.getElementById('mk-wr').style.color = vis;
      document.getElementById('mk-fp').style.color = vis;
      document.getElementById('mk-pb').style.color = vis;
      document.getElementById('mk-pi').style.color = vis;
      document.getElementById('qc-hs').style.color = vis;
      document.getElementById('qc-km').style.color = vis;
      document.getElementById('qc-mn').style.color = vis;
      document.getElementById('at-sa').style.color = vis;
      document.getElementById('pg-mf').style.color = vis;
      document.getElementById('pg-dp').style.color = vis;
      document.getElementById('ca-ky').style.color = vis;
      document.getElementById('ca-up').style.color = vis;
      document.getElementById('nv-nv').style.color = vis;
      document.getElementById('va-ma').style.color = vis;
      document.getElementById('ty-gf').style.color = vis;
      document.getElementById('sj-fb').style.color = vis;
      document.getElementById('pq-kb').style.color = vis;
      document.getElementById('lp-pa').style.color = vis;
      document.getElementById('lp-sl').style.color = vis;
      document.getElementById('pq-si').style.color = vis;
      document.getElementById('pa-mv').style.color = vis;
      document.getElementById('mn-qa').style.color = vis;
      document.getElementById('qc-py').style.color = vis;
      document.getElementById('rd-sj').style.color = vis;
      document.getElementById('at-sr').style.color = vis;
      document.getElementById('tt-tp').style.color = vis;
      document.getElementById('pi-ma').style.color = vis;
      document.getElementById('ag-sl').style.color = vis;
      document.getElementById('ag-sv').style.color = vis;
      document.getElementById('bk-da').style.color = vis;

      document.getElementById('MOIP').style.padding = "0";
      document.getElementById('MOD').style.padding = "0";
      document.getElementById('xuws1').style.padding = "0";
      document.getElementById('mo001').style.padding = "0";
      document.getElementById('mo002').style.padding = "0";
      document.getElementById('mo003').style.padding = "0";
      document.getElementById('mo004').style.padding = "0";
      document.getElementById('makati01').style.padding = "0";
      document.getElementById('makati02').style.padding = "0";
      document.getElementById('makati03').style.padding = "0";
      document.getElementById('makati04').style.padding = "0";
      document.getElementById('makati05').style.padding = "0";
      document.getElementById('makati06').style.padding = "0";
      document.getElementById('makati07').style.padding = "0";
      document.getElementById('mw001').style.padding = "0";
      document.getElementById('mw002').style.padding = "0";
      document.getElementById('mw003').style.padding = "0";
      document.getElementById('mw004').style.padding = "0";
      document.getElementById('mw005').style.padding = "0";
      document.getElementById('mw006').style.padding = "0";
      document.getElementById('mw007').style.padding = "0";
      document.getElementById('mw008').style.padding = "0";
      document.getElementById('mw009').style.padding = "0";
      document.getElementById('mw010').style.padding = "0";
      document.getElementById('mw011').style.padding = "0";
      document.getElementById('mw012').style.padding = "0";
      document.getElementById('mw013').style.padding = "0";
      document.getElementById('mw014').style.padding = "0";
      document.getElementById('mw015').style.padding = "0";
      document.getElementById('mw016').style.padding = "0";
      document.getElementById('mw017').style.padding = "0";
      document.getElementById('mw018').style.padding = "0";
      document.getElementById('mw019').style.padding = "0";
      document.getElementById('mw021').style.padding = "0";
      document.getElementById('mw022').style.padding = "0";
      document.getElementById('mw023').style.padding = "0";
      document.getElementById('mw024').style.padding = "0";
      document.getElementById('mw027').style.padding = "0";
      document.getElementById('mw028').style.padding = "0";
      document.getElementById('zipzone').style.padding = "0"; break;
  }
}

function switchp(sts) {
  selectedsts = sts;
  document.getElementById('prain').innerHTML = document.getElementById(sts + '-prain').innerHTML;
  document.getElementById('ptemp').innerHTML = document.getElementById(sts + '-ptemp').innerHTML;
  document.getElementById('pwind').innerHTML = document.getElementById(sts + '-pwind').innerHTML;
  document.getElementById('ppres').innerHTML = document.getElementById(sts + '-ppres').innerHTML;

  switch (sts) {
    case 'MOIP': document.getElementById('st-choice').innerHTML = 'Ateneo de Manila University, Quezon City'; break;
    case 'MOD': document.getElementById('st-choice').innerHTML = 'Matina Hills, Davao City'; break;
    case 'xuws1': document.getElementById('st-choice').innerHTML = 'Xavier University, Cagayan de Oro City'; break;
    case 'mo001': document.getElementById('st-choice').innerHTML = 'Nangka, Marikina City'; break;
    case 'mo002': document.getElementById('st-choice').innerHTML = 'Ateneo de Zamboanga University, Zamboanga City'; break;
    case 'mo003': document.getElementById('st-choice').innerHTML = 'Notre Dame of Marbel University, Koronadal City'; break;
    case 'zipzone': document.getElementById('st-choice').innerHTML = 'Dahilayan Adventure Park, Bukidnon'; break;
    case 'mo004': document.getElementById('st-choice').innerHTML = 'Guadalupe, Makati City (MMDA-MO Station)'; break;
    case 'makati01': document.getElementById('st-choice').innerHTML = 'Brgy. San Lorenzo, Makati City'; break;
    case 'makati02': document.getElementById('st-choice').innerHTML = 'Makati City Hall, Makati City'; break;
    case 'makati03': document.getElementById('st-choice').innerHTML = 'Brgy. San Antonio, Makati City'; break;
    case 'makati04': document.getElementById('st-choice').innerHTML = 'Brgy. West Rembo, Makati City'; break;
    case 'makati05': document.getElementById('st-choice').innerHTML = 'Brgy. Forbes Park, Makati City'; break;
    case 'makati06': document.getElementById('st-choice').innerHTML = 'Brgy. Pembo, Makati City (OSMAK)'; break;
    case 'makati07': document.getElementById('st-choice').innerHTML = 'Brgy. Pinagkaisahan, Makati City'; break;
    case 'mw001': document.getElementById('st-choice').innerHTML = 'Southland, Talon Uno, Las Pinas City'; break;
    case 'mw002': document.getElementById('st-choice').innerHTML = 'Brgy. Holy Spirit, Quezon City (Caltex)'; break;
    case 'mw003': document.getElementById('st-choice').innerHTML = 'Brgy. Kamuning, Quezon City (Caltex)'; break;
    case 'mw004': document.getElementById('st-choice').innerHTML = 'Mindanao Avenue, Quezon City (Caltex)'; break;
    case 'mw005': document.getElementById('st-choice').innerHTML = 'Sumulong Avenue, Antipolo, Rizal (Caltex)'; break;
    case 'mw006': document.getElementById('st-choice').innerHTML = 'Manggahan Floodway, Pasig City (Caltex)'; break;
    case 'mw007': document.getElementById('st-choice').innerHTML = 'U. Plata, Caloocan City (Caltex)'; break;
    case 'mw008': document.getElementById('st-choice').innerHTML = 'Navotas City (Caltex)'; break;
    case 'mw009': document.getElementById('st-choice').innerHTML = 'Malinta, Valenzuela (Caltex)'; break;
    case 'mw010': document.getElementById('st-choice').innerHTML = 'Gov. Forbes Tayuman, Manila (Caltex)'; break;
    case 'mw011': document.getElementById('st-choice').innerHTML = 'F. Blumentrit, San Juan (Caltex)'; break;
    case 'mw012': document.getElementById('st-choice').innerHTML = 'Kaybiga, Caloocan City'; break;
    case 'mw013': document.getElementById('st-choice').innerHTML = 'Kabihasnan, Paranaque (Caltex)'; break;
    case 'mw014': document.getElementById('st-choice').innerHTML = 'Pamplona, Las Pinas City (Caltex)'; break;
    case 'mw015': document.getElementById('st-choice').innerHTML = 'San Isidro, Sucat, Paranaque (Caltex)'; break;
    case 'mw016': document.getElementById('st-choice').innerHTML = 'Merville, Pasay City (Caltex)'; break;
    case 'mw017': document.getElementById('st-choice').innerHTML = 'Quirino Avenue, Manila (Caltex)'; break;
    case 'mw018': document.getElementById('st-choice').innerHTML = 'Brgy. Payatas B, Quezon City'; break;
    case 'mw019': document.getElementById('st-choice').innerHTML = 'Brgy. San Jose, Rodriguez, Rizal'; break;
    case 'mw020': document.getElementById('st-choice').innerHTML = 'Brgy. Ampid, San Mateo, Rizal'; break;
    case 'mw021': document.getElementById('st-choice').innerHTML = 'Brgy. San Roque, Antipolo City, Rizal'; break;
    case 'mw022': document.getElementById('st-choice').innerHTML = 'Tapayan Pumping Station, Taytay, Rizal'; break;
    case 'mw023': document.getElementById('st-choice').innerHTML = 'Brgy. Malaya, Pililla, Rizal'; break;
    case 'mw024': document.getElementById('st-choice').innerHTML = 'Brgy. San Vicente, Angono, Rizal'; break;
    case 'mw026': document.getElementById('st-choice').innerHTML = 'Corregidor Island, Cavite City'; break;
    case 'mw027': document.getElementById('st-choice').innerHTML = 'Brgy. San Luis, Antipolo City, Rizal'; break;
    case 'mw028': document.getElementById('st-choice').innerHTML = 'Brgy. dela Paz, Pasig City'; break;
  }
  document.getElementById('prain').style.backgroundColor = "#44708f";
  document.getElementById('ptemp').style.backgroundColor = "#44708f";
  document.getElementById('pwind').style.backgroundColor = "#44708f";
  document.getElementById('ppres').style.backgroundColor = "#44708f";
  document.getElementById('prain').style.borderRightColor = "#000000";
  document.getElementById('ptemp').style.borderRightColor = "#000000";
  document.getElementById('pwind').style.borderRightColor = "#000000";
  document.getElementById('ppres').style.borderRightColor = "#000000";
  document.getElementById('p' + stpara).style.backgroundColor = "#658eab";
  document.getElementById('p' + stpara).style.borderRightColor = "#658eab";
  document.getElementById('pwriteup').innerHTML = document.getElementById(sts + '-' + stpara).innerHTML;
}

function switchwu(p) {
  stpara = p;
  document.getElementById('prain').style.backgroundColor = "#44708f";
  document.getElementById('ptemp').style.backgroundColor = "#44708f";
  document.getElementById('pwind').style.backgroundColor = "#44708f";
  document.getElementById('ppres').style.backgroundColor = "#44708f";
  document.getElementById('prain').style.borderRightColor = "#000000";
  document.getElementById('ptemp').style.borderRightColor = "#000000";
  document.getElementById('pwind').style.borderRightColor = "#000000";
  document.getElementById('ppres').style.borderRightColor = "#000000";
  document.getElementById('p' + p).style.backgroundColor = "#658eab";
  document.getElementById('p' + p).style.borderRightColor = "#658eab";
  document.getElementById('pwriteup').innerHTML = document.getElementById(selectedsts + '-' + p).innerHTML;
}

function qmorph(box) {
  var vis = (box.checked) ? 'none' : 'block';
  document.getElementById('qmorph').style.display = vis;
}

function qmorphstep(t) {
  switch (t) {
    case '00': document.getElementById('qmorph').innerHTML = '<img alt="QMORPH Rainfall" src="./wwi-images/qmorph00.png"/>'; break;
    case '01': document.getElementById('qmorph').innerHTML = '<img alt="QMORPH Rainfall" src="./wwi-images/qmorph01.png"/>'; break;
    case '02': document.getElementById('qmorph').innerHTML = '<img alt="QMORPH Rainfall" src="./wwi-images/qmorph02.png"/>'; break;
    case '03': document.getElementById('qmorph').innerHTML = '<img alt="QMORPH Rainfall" src="./wwi-images/qmorph03.png"/>'; break;
    case '04': document.getElementById('qmorph').innerHTML = '<img alt="QMORPH Rainfall" src="./wwi-images/qmorph04.png"/>'; break;
    case '05': document.getElementById('qmorph').innerHTML = '<img alt="QMORPH Rainfall" src="./wwi-images/qmorph05.png"/>'; break;
    case '06': document.getElementById('qmorph').innerHTML = '<img alt="QMORPH Rainfall" src="./wwi-images/qmorph06.png"/>'; break;
  }
}