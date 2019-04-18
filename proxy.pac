function FindProxyForURL(url, host) {
	// our local URLs from the domains below example.com don't need a proxy:
	if (shExpMatch(host, "*.ru"))
	{
		return "PROXY 91.197.174.108:8080;78.107.239.115:45153";
	}

	// URLs within this network are accessed through
	// port 8080 on fastproxy.example.com:
	if (isInNet(host, "10.0.0.0", "255.255.248.0"))
	{
		return "PROXY fastproxy.example.com:8080";
	}

	// All other requests go through port 8080 of proxy.example.com.
	// should that fail to respond, go directly to the WWW:
	return "PROXY proxy.example.com:8080";
}
