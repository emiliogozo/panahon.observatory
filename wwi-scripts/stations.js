var regionMM = 1;
var regionRZ = 1;
var regionMN = 1;

var starray = new Array();
    starray[0] = "ca-up";
    starray[1] = "lp-pa";
    starray[2] = "mk-fp";
    starray[3] = "mk-gd";
    starray[4] = "mk-ch";
    starray[5] = "mk-pb";
    starray[6] = "mk-sa";
    starray[7] = "mk-sl";
    starray[8] = "mk-wr";
    starray[9] = "mn-qa";
    starray[10] = "mr-ng";
    starray[11] = "nv-nv";
    starray[12] = "pq-kb";
    starray[13] = "pq-si";
    starray[14] = "pa-mv";
    starray[15] = "pg-mf";
    starray[16] = "qc-mo";
    starray[17] = "qc-hs";
    starray[18] = "qc-km";
    starray[19] = "qc-mn";
    starray[20] = "qc-py";
    starray[21] = "sj-fb";
    starray[22] = "ty-gf";
    starray[23] = "va-ma";
    starray[24] = "ag-sv";
    starray[25] = "at-sr";
    starray[26] = "at-sa";
    starray[27] = "pi-ma";
    starray[28] = "rd-sj";
    starray[29] = "sm-am";
    starray[30] = "tt-tp";
    starray[31] = "cv-cc";
    starray[32] = "bk-da";
    starray[33] = "co-xu";
    starray[34] = "dc-mo";
    starray[35] = "kr-nm";
    starray[36] = "zc-az";
    starray[37] = "ag-sl";
    starray[38] = "mk-pi";
    starray[39] = "pg-sp";
    starray[40] = "ca-ky";

function pargraph(v, box) {
  var vis = (box.checked) ? 'none' : 'block';
  for(i=0;i<37;i++) {
    var param = starray[i]+v;
    document.getElementById(param).style.display = vis;
  }
}

function stselect(r, box) {
  switch(r) {
    case 'mm': if(window.regionMM == 1){
                 document.getElementById('mm').style.backgroundColor = "#5d89ab";
                 for(i=0;i<24;i++){
                   document.getElementById(starray[i]).style.display = "none";
                 }
                 window.regionMM = 0;
                 document.getElementById('allstations').checked = false;
               } else {
                 document.getElementById('mm').style.backgroundColor = "#446f90";
                 for(i=0;i<24;i++){
                   document.getElementById(starray[i]).style.display = "block";
                 }
                 window.regionMM = 1;
                 if(window.regionMM == 1 && window.regionRZ == 1 && window.regionMM == 1){
                   document.getElementById('allstations').checked = true;
                 }
               }; break;
    case 'rz': if(window.regionRZ == 1){
                 document.getElementById('rz').style.backgroundColor = "#5d89ab";
                 for(i=24;i<31;i++){
                   document.getElementById(starray[i]).style.display = "none";
                 }
                 window.regionRZ = 0;
                 document.getElementById('allstations').checked = false;
               } else {
                 document.getElementById('rz').style.backgroundColor = "#446f90";
                 for(i=24;i<31;i++){
                   document.getElementById(starray[i]).style.display = "block";
                 }
                 window.regionRZ = 1;
                 if(window.regionMM == 1 && window.regionRZ == 1 && window.regionMM == 1){
                   document.getElementById('allstations').checked = true;
                 }
               }; break;
    case 'mn': if(window.regionMN == 1){
                 document.getElementById('mn').style.backgroundColor = "#5d89ab";
                 for(i=31;i<37;i++){
                   document.getElementById(starray[i]).style.display = "none";
                 }
                 window.regionMN = 0;
                 document.getElementById('allstations').checked = false;
               } else {
                 document.getElementById('mn').style.backgroundColor = "#446f90";
                 for(i=31;i<37;i++){
                   document.getElementById(starray[i]).style.display = "block";
                 }
                 window.regionMN = 1;
                 if(window.regionMM == 1 && window.regionRZ == 1 && window.regionMM == 1){
                   document.getElementById('allstations').checked = true;
                 }
               }; break;
    case 'all': var vis = (box.checked) ? 'none' : 'block';
                if(vis == "none"){
                  document.getElementById('mm').style.backgroundColor = "#5d89ab";
                  document.getElementById('rz').style.backgroundColor = "#5d89ab";
                  document.getElementById('mn').style.backgroundColor = "#5d89ab";
                  window.regionMM = 0;
                  window.regionRZ = 0;
                  window.regionMN = 0;
                } else {
                  document.getElementById('mm').style.backgroundColor = "#446f90";
                  document.getElementById('rz').style.backgroundColor = "#446f90";
                  document.getElementById('mn').style.backgroundColor = "#446f90";
                  window.regionMM = 1;
                  window.regionRZ = 1;
                  window.regionMN = 1;
                };
                for(i=0;i<37;i++){
                  document.getElementById(starray[i]).style.display = vis;
                }; break;
  }
}