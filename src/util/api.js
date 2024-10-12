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
    return error;
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
    return error;
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
    return error;
  }
}

export async function groupLike(groupId) {
  try {
    const res = await instance.post(`/groups/${groupId}/like`);
    if (res.status === 200) {
      return res.data.likeCount;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function deleteGroup(groupId, password) {
  try {
    const res = await instance.delete(`/groups/${groupId}`, {
      data: { password: password },
    });
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function updateGroup(groupId, payload) {
  try {
    const res = await instance.put(`/groups/${groupId}`, payload);
    return res;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function createPost(groupId, payload) {
  try {
    const res = await instance.post(`/groups/${groupId}/posts`, payload);
    if (res.status === 201) {
      return res;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function groupPassword(groupId, password) {
  try {
    const res = await instance.post(`/groups/${groupId}/verify-password`, {
      password: password,
    });
    if (res.status === 200) {
      return res;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}
