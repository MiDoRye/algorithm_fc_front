const getUser = async () => {
    const userId = 1; // 변경 가능한 user_id
    const response = await fetch(`http://127.0.0.1:8000/users/${userId}/`);
    if (!response.ok) {
        console.log(`HTTP error! status: ${response.status}`);
        return null;
    }
    const user = await response.json();
    return user;
}

const setProfile = (user) => {
    const profileImage = document.querySelector('.profileImage');
    const profileInfo = document.querySelector('.profileInfo');
    const posts = document.querySelector('.posts');
    const likes = document.querySelector('.likes');
    const followers = document.querySelector('.followers');
    const followings = document.querySelector('.followings');

    profileImage.innerHTML = `<img id="profile_image" src="//127.0.0.1:8000${user.image}" height="350">`;
    profileInfo.innerHTML = `
    <table>
      <tr>
        <th width="100">이메일</th>
        <td width="50"></td>
        <td>${user.email}</td>
      </tr>
      <tr height="10"></tr>
      <tr>
        <th>나이</th>
        <td></td>
        <td>${user.age}</td>
      </tr>      
      <tr height="10"></tr>
      <tr>
        <th>소개글</th>
        <td></td>
        <td>${user.introduction}</td>
      </tr>
    </table>`;

    const userPosts = user.user_posts;
    const postTitles = userPosts.map(post => `<tr height="10"><td width="500"><a href="/posts/${post.id}">${post.title}</a></td> <td>${post.updated_at}</td><tr>`);
    const postList = postTitles.join('');
    posts.innerHTML = `<h3>작성 글 목록</h3>
    <table>
    <tr height="20"></tr>
    ${postList}
    </table>`;

    const userLikes = user.like_posts;
    const likeTitles = userLikes.map(post => `<tr height="10"><td width="500"><a href="/posts/${post.id}">${post.title}</a></td> <td>${post.updated_at}</td><tr>`);
    const likeList = likeTitles.join('');
    likes.innerHTML = `<h3>좋아요 목록</h3>
    <table>
    <tr height="20"></tr>
    ${likeList}
    </table>`;

    const followersList = user.followers.map(followers => `<tr><td><a href="/users/${user.id}">${followers}</a></td></tr>`).join('');
    followers.innerHTML = `
    <h3>팔로워</h3>
    <table>
        ${followersList}
    </table>`;

    const followingsList = user.followings.map(followings => `<tr><td><a href="/users/${user.id}">${followings}</a></td></tr>`).join('');
    followings.innerHTML = `
    <h3>팔로우</h3>
    <table>
        ${followingsList}
    </table>`;
}

const loadProfile = async () => {
    const user = await getUser();
    if (user) {
        setProfile(user);
    } else {
        console.log('User not found.');
    }
}

loadProfile();
