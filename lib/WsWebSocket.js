
/**
 * WsWebSocket is ws to WebSocket adapter implementing only what is needed for Connection. 
 */

class WsWebSocket extends WebSocket {
	on( what, listener ) {
		if( what == "message") 
			this["on"+what] = function(m) {return listener(m.data);};
		else
			this["on"+what] = listener; 
	}

	removeListener( what, listener ) {
		this["on"+what] = undefined;
	}

	setMaxListeners(n) {
		;
	}
}

module.exports = WsWebSocket;
