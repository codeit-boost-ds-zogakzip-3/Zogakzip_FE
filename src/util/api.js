import axios from "axios";

const instance = axios.create({
  baseURL: "https://zogakzip-be-t39a.onrender.com/api",
});

export async function getGroupList(params) {
  try {
    const res = await instance.get(`/groups`, { params });
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getPostList(groupId, params) {
  try {
    const res = await instance.get(`/groups/${groupId}/posts`, { params });
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getGroupDetail(groupId) {
  try {
    const res = await instance.get(`/groups/${groupId}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
}
