// Это файл DAL
import axios from "axios"
const instanse = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: { "API-KEY": "4dfb08c9-932e-4085-a0f9-586af4b884c7" }
})
export const usersAPI = {
	getUsers: (pageNumber = 1, pageSize) => {
		return instanse.get(`/users?page=${pageNumber}&count=${pageSize}`)
	},
	setProfileAPI: (userId) => {
		return instanse.get(`/profile/${userId}`)
	},
	getDataLogin: () => {
		return instanse.get("/auth/me")
	},
	setDataLogin: (email, password, rememberMe = false) => {
		return instanse.post("/auth/login", { email, password, rememberMe })
	},
	removeDataLogin: () => {
		return instanse.delete('/auth/login')
	},
	captcha: () => {
		return instanse.get("/security/get-captcha-url")
	}
}
export const followAPI = {
	getFollowStatus: (id) => {
		return instanse.get(`/follow/${id}`)
	},
	setFollowAPI: (id) => {
		return instanse.post(`/follow/${id}`)
	},
	setUnfollowAPI: (id) => {
		return instanse.delete(`/follow/${id}`)
	},
}

export const profileAPI = {
	getStatus: (userId) => {
		if (userId) {
			return instanse.get(`/profile/status/${userId}`);
		}
	},
	updateStatus: (status) => {
		return instanse.put(`/profile/status`, {
			status: status
		});
	}
}