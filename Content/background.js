let discordPort,youtubePort,youtubeMusicPort,soundcloudPort,plexPort,source="custom"
const resetActivity=()=>{
	if(discordPort!==undefined)
	{
		discordPort.postMessage({
			type:0,
			name:"",
			streamurl:"",
			details:"",
			state:"",
			partycur:"",
			partymax:""
		})
	}
}
