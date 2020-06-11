import Cookies from 'js-cookie'

const tokenKey = 'usercenterToken'

export function getToken(){
	return Cookies.get(tokenKey)
}

export function setToken(token){
	return Cookies.set(tokenKey,token)
}

export function removeToken(){
	return Cookies.remove(tokenKey)
}


export function getLogo(){
	return Cookies.get('userLogo')
}

export function setLogo(logo){
	return Cookies.set('userLogo',logo)
}

export function removeLogo(){
	return Cookies.remove('userLogo')
}

export function getExtime(){
	return Cookies.get('backexTime')
}

export function setExtime(extime){
	return Cookies.set('backexTime',extime)
}

export function removeExtime(){
	return Cookies.remove('backexTime')
}