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
document.getElementById("type").onchange=()=>{
	let type=document.getElementById("type").value
	if(type==1)
	{
		document.getElementById("streamurl").style.display="block"
		document.getElementById("streamnote").style.display="list-item"
	}
	else
	{
		document.getElementById("streamurl").style.display="none"
		document.getElementById("streamnote").style.display="none"
	}
	if(type>1)
	{
		document.getElementById("state").className=""
		document.getElementById("party").style.display="none"
	}
	else
	{
		document.getElementById("state").className="withparty"
		document.getElementById("party").style.display="inline-block"
	}
	if(type==4)
	{
		document.getElementById("type").style.width="399px"
		document.getElementById("name").style.display="none"
		document.getElementById("details").style.display="none"
	}
	else
	{
		document.getElementById("type").style.width=""
		document.getElementById("name").style.display="inline-block"
		document.getElementById("details").style.display="inline-block"
	}
}

chrome.storage.local.get(["source","type","name","streamurl","details","state","partycur","partymax"],result=>{
	if(result.source)
	{
		document.querySelector("#source [value='"+result.source+"']").setAttribute("selected","selected")
	}
	document.getElementById("source").onchange()
	if(result.type)
	{
		document.querySelector("#type [value='"+result.type+"']").setAttribute("selected","selected")
	}
	document.getElementById("type").onchange()
	if(result.name)
	{
		document.getElementById("name").value=result.name
	}
	if(result.streamurl)
	{
		document.getElementById("streamurl").value=result.streamurl
	}
	if(result.details)
	{
		document.getElementById("details").value=result.details
	}
	if(result.state)
	{
		document.getElementById("state").value=result.state
	}
	if(result.partycur)
	{
		document.getElementById("partycur").value=result.partycur
	}
	if(result.partymax)
	{
		document.getElementById("partymax").value=result.partymax
	}
})
