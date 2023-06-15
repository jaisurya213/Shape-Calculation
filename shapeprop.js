// cuboid script

function cuboidcsa() {
  const cuboidlen = parseInt(document.getElementById("cuboidlen").value);
  const cuboidbre = parseInt(document.getElementById("cuboidbre").value);
  const cuboidhei = parseInt(document.getElementById("cuboidhei").value);
  const csa = 2 * cuboidhei * (cuboidbre + cuboidlen);
  document.getElementById("result").innerHTML = "Answer :" + csa;
}
function cuboidtsa() {
  const cuboidlen = parseInt(document.getElementById("cuboidlen").value);
  const cuboidbre = parseInt(document.getElementById("cuboidbre").value);
  const cuboidhei = parseInt(document.getElementById("cuboidhei").value);
  const tsa =
    2 * (cuboidlen * cuboidbre + cuboidbre * cuboidhei + cuboidlen * cuboidhei);
  document.getElementById("result").innerHTML = "Answer :" + tsa;
}
function cuboidvol() {
  const cuboidlen = parseInt(document.getElementById("cuboidlen").value);
  const cuboidbre = parseInt(document.getElementById("cuboidbre").value);
  const cuboidhei = parseInt(document.getElementById("cuboidhei").value);
  const v = cuboidbre * cuboidhei * cuboidlen;
  document.getElementById("result").innerHTML = "Answer :" + v;
}
//   cube script
function cubecsa() {
  const a = parseInt(document.getElementById("a").value);
  const csa = 4 * a * a;
  document.getElementById("cube-result").innerHTML = "Answer :" + csa;
}
function cubetsa() {
  const a = parseInt(document.getElementById("a").value);
  const tsa = 6 * a * a;
  document.getElementById("cube-result").innerHTML = "Answer :" + tsa;
}
function cubevol() {
  const a = parseInt(document.getElementById("a").value);
  const v = a * a * a;
  document.getElementById("cube-result").innerHTML = "Answer :" + v;
}
//   Right Circular Cylinder
function rcccsa() {
  const rccrad = parseInt(document.getElementById("rccrad").value);
  const rcchei = parseInt(document.getElementById("rcchei").value);

  const csa = 2 * Math.PI * rccrad * rcchei;
  document.getElementById("rcc-result").innerHTML = "Answer :" + csa;
}
function rcctsa() {
  const rccrad = parseInt(document.getElementById("rccrad").value);
  const rcchei = parseInt(document.getElementById("rcchei").value);
  const tsa = 2 * Math.PI * r * (rccrad + rcchei);
  document.getElementById("rcc-result").innerHTML = "Answer :" + tsa;
}
function rccvol() {
  const rccrad = parseInt(document.getElementById("rccrad").value);
  const rcchei = parseInt(document.getElementById("rcchei").value);
  const v = Math.PI * rccrad * rccrad * rcchei;
  document.getElementById("rcc-result").innerHTML = "Answer :" + v;
}
//   Right circular cone
function rccocsa() {
  const rccolen = parseInt(document.getElementById("rccolen").value);
  const rccorad = parseInt(document.getElementById("rccorad").value);
  const rccohei = parseInt(document.getElementById("rccohei").value);
  const csa = Math.PI * rccorad * rccolen;
  document.getElementById("rcco-result").innerHTML = "Answer :" + csa;
}
function rccotsa() {
  const rccolen = parseInt(document.getElementById("rccolen").value);
  const rccorad = parseInt(document.getElementById("rccorad").value);
  const rccohei = parseInt(document.getElementById("rccohei").value);
  const tsa = Math.PI * rccorad * (rccolen + rccorad);
  document.getElementById("rcco-result").innerHTML = "Answer :" + tsa;
}
function rccovol() {
  const rccolen = parseInt(document.getElementById("rccolen").value);
  const rccorad = parseInt(document.getElementById("rccorad").value);
  const rccohei = parseInt(document.getElementById("rccohei").value);
  const v = (1 / 3) * Math.PI * rccorad * rccorad * rccohei;
  document.getElementById("rcco-result").innerHTML = "Answer :" + v;
}
//   Sphere
function sphcsa() {
  const sphrad = parseInt(document.getElementById("sphrad").value);
  const csa = 4 * Math.PI * sphrad * sphrad;
  document.getElementById("sph-result").innerHTML = "Answer :" + csa;
}
function sphtsa() {
  const sphrad = parseInt(document.getElementById("sphrad").value);
  const tsa = 4 * Math.PI * sphrad * sphrad;
  document.getElementById("sph-result").innerHTML = "Answer :" + tsa;
}
function sphvol() {
  const sphrad = parseInt(document.getElementById("sphrad").value);
  const v = (4 / 3) * Math.PI * sphrad * sphrad * sphrad;
  document.getElementById("sph-result").innerHTML = "Answer :" + v;
}
//   Hemi-sphere
function hmicsa() {
  const hmirad = parseInt(document.getElementById("hmirad").value);
  const csa = 2 * Math.PI * hmirad * hmirad;
  document.getElementById("hmi-result").innerHTML = "Answer :" + csa;
}
function hmitsa() {
  const hmirad = parseInt(document.getElementById("hmirad").value);
  const tsa = 3 * Math.PI * hmirad * hmirad;
  document.getElementById("hmi-result").innerHTML = "Answer :" + tsa;
}
function hmivol() {
  const hmirad = parseInt(document.getElementById("hmirad").value);
  const v = (2 / 3) * Math.PI * hmirad * hmirad * hmirad;
  document.getElementById("hmi-result").innerHTML = "Answer :" + v;
}
