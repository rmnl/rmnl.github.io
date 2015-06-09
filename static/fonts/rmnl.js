
function rmnl_logo(size, bgcolor, id) {
  var el = document.createElement('CANVAS');
  if (id) el.id = id;
  el.width = size;
  el.height = size;
  var ctx = el.getContext("2d");

  function _(percentile) {
    return (percentile / 1000.0) * size;
  }

  ctx.save();
  ctx.beginPath();
  ctx.arc(_(500.0), _(500.0),_(500.0),0,Math.PI*2,true)
  ctx.fillStyle = bgcolor;
  ctx.fill();

  // http://www.tutorialspoint.com/html5/canvas_composition.htm
  ctx.globalCompositeOperation = 'destination-out';


  // layer1/Path
  ctx.beginPath();
  ctx.moveTo(_(489.0), _(679.9));
  ctx.lineTo(_(703.1), _(687.3));
  ctx.bezierCurveTo(_(731.6), _(688.3), _(754.2), _(711.7), _(754.2), _(740.3));
  ctx.bezierCurveTo(_(754.2), _(769.5), _(730.5), _(793.3), _(701.2), _(793.3));
  ctx.bezierCurveTo(_(700.6), _(793.3), _(700.0), _(793.2), _(699.4), _(793.2));
  ctx.lineTo(_(485.3), _(785.8));
  ctx.bezierCurveTo(_(421.6), _(783.5), _(371.1), _(731.2), _(371.1), _(667.5));
  ctx.lineTo(_(371.1), _(742.2));
  ctx.bezierCurveTo(_(371.1), _(771.4), _(347.4), _(795.1), _(318.1), _(795.1));
  ctx.bezierCurveTo(_(288.9), _(795.1), _(265.2), _(771.4), _(265.2), _(742.2));
  ctx.lineTo(_(265.2), _(411.5));
  ctx.bezierCurveTo(_(265.2), _(366.6), _(277.5), _(322.6), _(300.9), _(284.3));
  ctx.bezierCurveTo(_(310.5), _(268.5), _(327.6), _(258.9), _(346.1), _(258.9));
  ctx.bezierCurveTo(_(375.3), _(258.9), _(399.1), _(282.6), _(399.1), _(311.9));
  ctx.bezierCurveTo(_(399.1), _(321.6), _(396.4), _(331.1), _(391.3), _(339.4));
  ctx.lineTo(_(391.3), _(339.4));
  ctx.bezierCurveTo(_(378.1), _(361.1), _(371.1), _(386.1), _(371.1), _(411.5));
  ctx.lineTo(_(371.1), _(667.5));
  ctx.bezierCurveTo(_(371.1), _(602.2), _(424.1), _(549.2), _(489.4), _(549.2));
  ctx.bezierCurveTo(_(492.5), _(549.2), _(495.7), _(549.4), _(498.8), _(549.6));
  ctx.lineTo(_(498.8), _(549.6));
  ctx.bezierCurveTo(_(502.4), _(549.9), _(506.0), _(550.0), _(509.7), _(550.0));
  ctx.bezierCurveTo(_(586.2), _(550.0), _(648.3), _(488.0), _(648.3), _(411.5));
  ctx.bezierCurveTo(_(648.3), _(335.0), _(586.2), _(273.0), _(509.7), _(273.0));
  ctx.bezierCurveTo(_(488.2), _(273.0), _(467.0), _(277.9), _(447.8), _(287.6));
  ctx.bezierCurveTo(_(440.4), _(291.2), _(432.3), _(293.1), _(424.1), _(293.1));
  ctx.bezierCurveTo(_(394.9), _(293.1), _(371.1), _(269.4), _(371.1), _(240.2));
  ctx.bezierCurveTo(_(371.1), _(220.1), _(382.5), _(201.7), _(400.4), _(192.8));
  ctx.bezierCurveTo(_(434.4), _(175.8), _(471.8), _(167.0), _(509.7), _(167.0));
  ctx.bezierCurveTo(_(644.7), _(167.0), _(754.2), _(276.5), _(754.2), _(411.5));
  ctx.bezierCurveTo(_(754.2), _(546.4), _(644.7), _(656.0), _(509.7), _(656.0));
  ctx.bezierCurveTo(_(503.3), _(656.0), _(496.8), _(655.7), _(490.4), _(655.2));
  ctx.lineTo(_(490.4), _(655.2));
  ctx.bezierCurveTo(_(490.1), _(655.2), _(489.8), _(655.2), _(489.4), _(655.2));
  ctx.bezierCurveTo(_(482.6), _(655.2), _(477.1), _(660.7), _(477.1), _(667.5));
  ctx.bezierCurveTo(_(477.1), _(674.2), _(482.3), _(679.6), _(489.0), _(679.9));
  ctx.closePath();
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fill();
  // ctx.strokeStyle = bgcolor;
  // ctx.stroke();
  ctx.restore();
  
  return el;
}

function set_images() {
  var 
  logo = document.getElementById('logo');
  logo_size = logo.clientWidth;
  // logoImg = rmnl_logo(logo_size-1, "rgb(255, 50, 0)"),
  logoImg = rmnl_logo(logo_size-1, "rgb(135, 73, 35)"),
  logo.setAttribute('style', 'background-image: url(' + logoImg.toDataURL() + ')');
  logolink = document.getElementById('logolink');
  logolinkImg = rmnl_logo(logo_size, "rgb(35, 35, 35)");
  logolink.setAttribute('style', 'background-image: url(' + logolinkImg.toDataURL() + ')');
}

set_images();
