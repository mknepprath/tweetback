let data = {
	username: "mknepprath", // No leading @ here
	homeLabel: "mknepprath.com",
	homeUrl: "https://mknepprath.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;