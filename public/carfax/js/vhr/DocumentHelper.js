var selenium = (this)?this.browserbot:null;

var DocumentHelper = {
	getDocument:function(){
		if(selenium){
			selenium.getCurrentWindow().document;
		}
		return document;
	}
}
