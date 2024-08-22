export interface User {
	name: string;
	id: string;
	dead: boolean;
	placeFinished: number;
	target: string;
	accessCode: string;
}

let user:User = {
	name: "",
	id: "4456",
	dead: false,
	placeFinished: -1,	
	target: "fake",
	accessCode: "53234",
};

let target:User = {
	name: "",
	id: "4456",
	dead: false,
	placeFinished: -1,	
	target: "fake",
	accessCode: "53234",
};


export const setUser = function (obj: User) {
	user = obj;
}

export const getUser = function () {
	return user;
}

export const setTarget = function (obj: User) {
	target = obj;
}

export const getTarget = function () {
	return target;
}