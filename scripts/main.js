
var moonImg = document.querySelector("img");
var moonPhaseHeader = document.querySelector("#moonPhase");

var newMoonButton = document.querySelector("#newMoon");
var waxCreButton = document.querySelector("#waxCre");
var firstQuarButton = document.querySelector("#firstQuar");
var waxGibButton = document.querySelector("#waxGib");
var fullMoonButton = document.querySelector("#fullMoon");
var wanGibButton = document.querySelector("#wanGib");
var thidQuarButton = document.querySelector("#thidQuar");
var wanCreButton = document.querySelector("#wanCre");

newMoonButton.onclick = function()
{
	setMoonImage("newMoon");
}

waxCreButton.onclick = function()
{
	setMoonImage("waxCre");
}

firstQuarButton.onclick = function()
{
	setMoonImage("firstQuar");
}

waxGibButton.onclick = function()
{
	setMoonImage("waxGib");
}

fullMoonButton.onclick = function()
{
	setMoonImage("fullMoon");
}

wanGibButton.onclick = function()
{
	setMoonImage("wanGib");
}

thidQuarButton.onclick = function()
{
	setMoonImage("thidQuar");
}

wanCreButton.onclick = function()
{
	setMoonImage("wanCre");
}

function setMoonImage(moonPhase)
{
	if(moonPhase === "newMoon")
	{
		moonImg.setAttribute("src", "images/new_moon.jpg");
		moonPhaseHeader.textContent = "Phase: New Moon";
	}
	else if(moonPhase === "waxCre")
	{
		moonImg.setAttribute("src", "images/waxing_crescent.jpg");
		moonPhaseHeader.textContent = "Phase: Waxing Crescent";
	}
	else if(moonPhase === "firstQuar")
	{
		moonImg.setAttribute("src", "images/first_quarter.jpg");
		moonPhaseHeader.textContent = "Phase: First Quarter";
	}
	else if(moonPhase === "waxGib")
	{
		moonImg.setAttribute("src", "images/waxing_gibbous.jpg");
		moonPhaseHeader.textContent = "Phase: Waxing Gibbous";
	}
	else if(moonPhase === "fullMoon")
	{
		moonImg.setAttribute("src", "images/full_moon.jpg");
		moonPhaseHeader.textContent = "Phase: Full Moon";
	}
	else if(moonPhase === "wanGib")
	{
		moonImg.setAttribute("src", "images/waning_gibbous.jpg");
		moonPhaseHeader.textContent = "Phase: Waning Gibbous";
	}
	else if(moonPhase === "thidQuar")
	{
		moonImg.setAttribute("src", "images/third_quarter.jpg");
		moonPhaseHeader.textContent = "Phase: Third Quarter";
	}
	else
	{
		moonImg.setAttribute("src", "images/waning_crescent.jpg");
		moonPhaseHeader.textContent = "Phase: Waning Crescent";
	}

}
