let elms=document.querySelectorAll("[data-message]")
for(let i in elms)
{
	let elm=elms[i]
	if(elm instanceof HTMLElement)
	{
		elm.textContent=chrome.i18n.getMessage(elm.getAttribute("data-message"))
	}
}
elms=document.querySelectorAll("[data-placeholder]")
for(let i in elms)
{
	let elm=elms[i]
	if(elm instanceof HTMLElement)
	{
		elm.setAttribute("placeholder",chrome.i18n.getMessage(elm.getAttribute("data-placeholder")))
	}
}

document.getElementById("source").onchange=()=>{
	let source=document.getElementById("source").value
	if(source=="custom")
	{
		document.getElementById("content-source-custom").className=""
	}
	else
	{
		document.getElementById("content-source-custom").className="hidden"
	}
	if(source=="youtube")
	{
		document.getElementById("content-source-youtube").className=""
	}
	else
	{
		document.getElementById("content-source-youtube").className="hidden"
	}
	if(source=="youtubemusic")
	{
		document.getElementById("content-source-youtube-music").className=""
	}
	else
	{
		document.getElementById("content-source-youtube-music").className="hidden"
	}
	if(source=="soundcloud")
	{
		document.getElementById("content-source-soundcloud").className=""
	}
	else
	{
		document.getElementById("content-source-soundcloud").className="hidden"
	}
	if(source=="plex")
	{
		document.getElementById("content-source-plex").className=""
	}
	else
	{
		document.getElementById("content-source-plex").className="hidden"
	}
}
