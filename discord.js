const injectionCode=()=>{
	const originalWebSocket=window.WebSocket,originalWebSocketProperties=["binaryType","bufferedAmount","extensions","onclose","onmessage","onopen","protocol","readyState","url"]
	let status="online",since=0,afk=false,timer
	window.SetDiscordActivityData={
		sendUpdate:false,
		activityType:0,
		activityName:"Nabil's Discord Activity",
		activityUrl:"https://github.com/nabilafk",
		activityDetails:"",
		activityState:"",
		activityPartyCur:"",
		activityPartyMax:""
	}
	window.WebSocket=function(u,p)
	{
		this.downstreamSocket=new originalWebSocket(u,p)
		if(u.indexOf("gateway.discord.gg")>-1)
		{
			window.SetDiscordActivityActiveSocket=this.downstreamSocket
		}
		for(let i in originalWebSocketProperties)
		{
			Object.defineProperty(this,originalWebSocketProperties[i],{
				get:()=>this.downstreamSocket[originalWebSocketProperties[i]],
				set:v=>this.downstreamSocket[originalWebSocketProperties[i]]=v
			})
		}
	}
	window.WebSocket.prototype.send=function(d)
	{
		if(this.downstreamSocket==window.SetDiscordActivityActiveSocket)
		{
			console.log(d)
			const start=d.substr(0,8)
			if(start=='{"op":3,')
			{
				const j=JSON.parse(d)
				status=j.d.status
				since=j.d.since
				afk=j.d.afk
				window.SetDiscordActivitySendStatus()
			}
			else
			{
				if(start=='{"op":2,')
				{
					clearInterval(timer)
					timer=setInterval(()=>{
						if(window.SetDiscordActivityData.sendUpdate)
						{
							window.SetDiscordActivityData.sendUpdate=false
							window.SetDiscordActivitySendStatus()
						}
					},500)
				}
				this.downstreamSocket.send(d)
			}
		}
		else
		{
			this.downstreamSocket.send(d)
		}
	}
