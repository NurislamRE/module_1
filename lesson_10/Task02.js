'use strict';

const listIPv4 = [
    "10.90.112.24",
    "10.64.146.250",
    "10.215.63.84",
    "10.125.20.72",
    "10.143.250.143",
    "10.181.137.59",
    "10.228.172.128",
    "10.111.75.25",
    "10.248.130.41",
    "10.61.119.18",
    "10.214.91.201",
    "10.135.242.153",
    "10.25.124.143",
    "10.150.137.9",
    "10.188.194.209",
    "10.20.86.137",
    "10.177.18.221",
    "10.155.176.121",
    "10.118.134.95",
    "10.220.244.27",
    "10.137.120.195",
    "10.254.90.68",
    "10.241.123.192",
    "10.225.86.70",
    "10.32.225.255",
    "10.30.183.206",
    "10.223.181.180",
    "10.12.44.148",
    "10.215.81.109",
    "10.106.226.146",
    "10.53.161.190",
    "10.126.201.95",
    "10.93.158.209",
    "10.38.77.59",
    "10.74.45.51",
    "10.58.112.75",
    "10.240.215.36",
    "10.79.193.144",
    "10.255.64.199",
    "10.232.248.131",
    "10.52.95.141",
    "10.21.85.44",
    "10.227.99.80",
    "10.253.74.9",
    "10.1.127.73",
    "10.230.189.141",
    "10.228.112.193",
    "10.228.105.76",
    "10.7.8.109",
    "10.242.117.231",
    "10.221.101.49",
    "10.63.144.229",
    "10.43.55.158",
    "10.251.179.40",
    "10.193.254.23",
    "10.120.224.5",
    "10.181.137.59",
    "10.228.172.128",
    "10.111.75.25",
    "10.2.82.240",
    "10.8.249.41",
    "10.219.121.202",
    "10.176.57.105",
    "10.9.86.169",
    "10.155.244.185",
    "10.91.78.172",
    "10.92.204.24",
    "10.7.14.106",
    "10.98.51.211",
    "10.244.177.186",
    "10.118.101.176",
    "10.200.26.121",
    "10.97.138.242",
    "10.115.79.236",
    "10.70.157.189",
    "10.117.246.91",
    "10.8.138.173",
    "10.175.89.140",
    "10.37.243.18",
    "10.154.221.165",
    "10.126.188.102",
    "10.136.244.233",
    "10.253.38.105",
    "10.75.172.245",
    "10.205.116.71",
    "10.80.156.68",
    "10.205.50.95",
    "10.25.43.70",
    "10.225.103.115",
    "10.69.30.176",
    "10.145.207.179",
    "10.84.20.80",
    "10.60.80.120",
    "10.151.144.166",
    "10.147.17.161",
    "10.243.99.136",
    "10.123.65.103",
    "10.16.83.206",
    "10.35.139.93",
    "10.8.147.153",
    "10.49.61.107",
    "10.93.145.79",
    "10.243.188.80",
    "10.89.195.150",
    "10.89.188.30",
    "10.102.204.19",
    "10.68.204.57",
    "10.22.138.69",
    "10.75.58.37",
    "10.75.172.245",
    "10.205.116.71",
    "10.80.156.68",
    "10.205.50.95",
    "10.18.186.33",
    "10.172.28.234",
    "10.76.182.232",
    "10.174.5.65",
    "10.18.255.52",
    "10.18.247.146",
    "10.31.195.103",
    "10.60.147.27",
    "10.142.148.96",
    "10.200.216.73",
    "10.241.194.246",
    "10.22.96.33",
    "10.100.155.220",
    "10.31.173.75",
    "10.120.32.33",
    "10.49.60.217",
    "10.13.30.65",
    "10.71.83.95",
    "10.4.126.7",
    "10.250.138.164",
    "10.77.37.4",
    "10.195.250.45",
    "10.122.234.227",
    "10.171.66.26",
    "10.209.200.119",
    "10.49.240.157",
    "10.106.136.132",
    "10.72.117.253",
    "10.253.99.210",
    "10.97.27.184",
    "10.35.27.174",
    "10.94.104.253",
    "10.24.56.137",
    "10.202.132.18",
    "10.147.165.189",
    "10.140.169.56",
    "10.246.92.188",
    "10.106.80.33",
    "10.171.137.197",
    "10.128.234.31",
    "10.46.20.153",
    "10.226.198.49",
    "10.196.228.143",
    "10.198.211.248",
    "10.46.102.35",
    "10.77.76.152",
    "10.229.108.32",
    "10.43.155.170",
    "10.197.51.21",
    "10.45.200.134",
    "10.245.126.199",
    "10.49.125.174",
    "10.169.41.101",
    "10.243.247.197",
    "10.29.17.79",
    "10.11.203.94",
    "10.3.229.27",
    "10.221.182.64",
    "10.181.160.85",
    "10.208.89.162",
    "10.5.130.137",
    "10.160.55.245",
    "10.189.123.223",
    "10.25.119.13",
    "10.31.22.120",
    "10.248.129.60",
    "10.83.161.244",
    "10.229.48.41",
    "10.8.34.94",
    "10.252.219.59",
    "10.41.106.154",
    "10.93.178.182",
    "10.59.14.77",
    "10.43.165.211",
    "10.70.167.121",
    "10.52.228.237",
    "10.54.99.35",
    "10.249.150.138",

    "10.246.92.188",
    "10.106.80.33",
    "10.171.137.197",
    "10.205.191.187",
    "10.201.184.28",
    "10.213.145.216",
    "10.74.3.33",
    "10.55.201.64",
    "10.42.38.231",
    "10.168.102.140",
    "10.98.110.214",
    "10.249.179.154",
    "10.215.4.21",
    "10.1.192.203",
    "10.76.192.12",
    "10.116.87.183",
    "10.32.42.253",
    "10.85.7.111",
    "10.101.42.187",
    "10.93.145.141",
    "10.174.33.38",
    "10.163.97.187",
    "10.57.65.139",
    "10.202.143.1",
    "10.234.2.123",
    "10.6.74.107",
    "10.213.174.181",
    "10.3.156.142",
    "10.15.202.26",
    "10.109.155.111",
    "10.26.252.205",
    "10.168.162.152",
    "10.214.45.135",
    "10.227.4.86",
    "10.237.70.44",
    "10.161.165.130",
    "10.197.17.12",
    "10.149.222.176",
    "10.183.102.166",
    "10.6.177.103",
    "10.243.167.249",
    "10.83.19.92",
    "10.114.219.38",
    "10.243.248.168",
    "10.210.195.163",
    "10.82.77.227",
    "10.83.127.176",
    "10.255.85.212",
    "10.84.39.254",
    "10.96.243.166",
    "10.28.146.251",
    "10.27.0.101",
    "10.102.15.57",
    "10.151.176.194",
    "10.253.226.101",
    "10.97.159.237",
    "10.225.51.233",
    "10.44.25.204",
    "10.216.189.147",
    "10.244.31.141",
    "10.4.6.81",
    "10.230.126.207",
    "10.130.86.219",
    "10.66.35.21",
    "10.131.21.35",
    "10.172.140.17",
    "10.250.233.68",
    "10.189.19.48",
    "10.125.129.241",
    "10.129.182.85",
    "10.35.61.248",
    "10.206.5.151",
    "10.153.4.31",
    "10.72.184.105",
    "10.126.178.216",
    "10.60.131.46",
    "10.222.210.104",
    "10.83.13.22",
    "10.139.28.147",
    "10.189.230.97",
    "10.189.176.238",
    "10.145.167.234",
    "10.221.133.202",
    "10.244.109.122",
    "10.250.27.58",
    "10.19.109.119",
    "10.83.211.242",
    "10.145.13.36",
    "10.232.192.127",
    "10.197.123.174",
    "10.234.132.2",
    "10.253.226.101",
    "10.97.159.237",
    "10.225.51.233",
    "10.237.108.64",
    "10.226.116.76",
    "10.69.161.55",
    "10.154.129.147",
    "10.175.168.215",
    "10.101.67.237",
    "10.175.46.199",
    "10.106.203.98",
    "10.218.189.199",
    "10.154.181.119",
    "10.6.50.39",
    "10.54.137.132",
    "10.70.75.133",
    "10.161.161.154",
    "10.252.217.231",
    "10.37.192.135",
    "10.106.1.148",
    "10.133.57.212",
    "10.205.180.161",
    "10.66.27.29",
    "10.49.75.162",
    "10.49.33.147",
    "10.150.50.126",
    "10.165.179.171",
    "10.138.74.212",
    "10.139.145.150",
    "10.134.171.240",
    "10.217.99.238",
    "10.232.176.118",
    "10.124.102.3",
    "10.4.36.72",
    "10.135.26.240",
    "10.146.229.193",
    "10.194.110.228",
    "10.82.96.199",
    "10.173.8.145",
    "10.6.157.180",
    "10.2.158.184",
    "10.187.130.100",
    "10.25.157.68",
    "10.255.134.187",
    "10.11.20.48",
    "10.128.199.15",
    "10.22.59.192",
    "10.33.85.94",
    "10.98.187.21",
    "10.51.64.75",
    "10.20.165.159",
    "10.118.50.254",
    "10.236.236.241",
    "10.18.108.32",
    "10.177.50.47",
    "10.25.39.200",
    "10.29.148.230",
    "10.168.219.84",
    "10.215.123.195",
    "10.248.135.22",
    "10.176.116.118",
    "10.148.80.94",
    "10.248.181.242",
    "10.171.103.230",
    "10.40.33.73",
    "10.55.176.188",
    "10.186.176.224",
    "10.201.203.175",
    "10.183.126.194",
    "10.96.118.17",
    "10.62.36.252",
    "10.121.58.169",
    "10.196.234.204",
    "10.0.227.216",
    "10.94.48.12",
    "10.170.48.226",
    "10.181.91.151",
    "10.43.235.227",
    "10.57.37.54",
    "10.182.98.128",
    "10.74.83.144",
    "10.198.114.239",
    "10.47.91.176",
    "10.126.92.68",
    "10.153.206.144",
    "10.173.8.145",
    "10.6.157.180",
    "10.2.158.184",
    "10.187.130.100",
    "10.25.157.68",
    "10.79.57.8",
    "10.218.172.91",
    "10.142.64.241",
    "10.42.116.223",
    "10.227.53.233",
    "10.55.26.96",
    "10.45.229.86",
    "10.69.98.55",
    "10.232.33.48",
    "10.153.107.235",
    "10.204.169.232",
    "10.25.78.21",
    "10.27.89.184",
    "10.186.94.76",
    "10.218.120.243",
    "10.15.178.201",
    "10.56.139.38",
    "10.251.210.196",
    "10.51.148.236",
    "10.51.66.30",
    "10.40.45.21",
    "10.221.170.20",
    "10.151.45.65",
    "10.185.71.192",
    "10.224.128.166",
    "10.91.166.207",
    "10.73.38.158",
    "10.111.188.247",
    "10.160.23.116",
    "10.46.116.106",
    "10.120.13.136",
    "10.219.144.172",
    "10.47.83.76",
    "10.112.6.38",
    "10.135.131.102",
    "10.218.143.91",
    "10.188.112.234",
    "10.84.183.119",
    "10.106.118.192",
    "10.143.80.230",
    "10.222.253.103",
    "10.159.42.8",
    "10.21.247.43",
    "10.44.230.30",
    "10.227.107.176",
    "10.129.37.209",
    "10.1.212.191",
    "10.148.53.133",
    "10.218.188.21",
    "10.26.112.11",
    "10.88.118.244",
    "10.140.12.214",
    "10.135.42.187",
    "10.110.41.229",
    "10.33.20.20",
    "10.17.157.215",
    "10.218.240.68",
    "10.216.87.155",
    "10.63.252.187",
    "10.64.240.110",
    "10.161.40.146",
    "10.212.34.21",
    "10.220.157.198",
    "10.195.164.92",
    "10.76.189.53",
    "10.198.138.143",
    "10.219.144.235",
    "10.69.190.39",
    "10.57.222.156",
    "10.11.144.53",
    "10.51.246.63",
    "10.9.233.27",
    "10.128.142.198",
    "10.242.199.83",
    "10.229.189.152",
    "10.188.94.156",
    "10.4.115.119",
    "10.240.58.35",
    "10.13.1.228",
    "10.237.231.35",
    "10.96.2.164",
    "10.169.86.239",
    "10.88.202.62",
    "10.9.7.254",
    "10.22.1.89",
    "10.153.136.90",
    "10.129.238.215",
    "10.97.54.187",
    "10.129.19.69",
    "10.15.157.72",
    "10.25.156.236",
    "10.51.66.30",
    "10.40.45.21",
    "10.221.170.20",
    "10.151.45.65",
    "10.185.71.192",
    "10.224.128.166",
    "10.91.166.207",
    "10.73.38.158",
    "10.111.188.247",
    "10.160.23.116",
    "10.46.116.106",
    "10.120.13.136",
    "10.219.144.172",
    "10.47.83.76",
    "10.112.6.38",
    "10.135.131.102",
    "10.218.143.91",
    "10.188.112.234",
    "10.84.183.119",
    "10.106.118.192",
    "10.143.80.230",
    "10.222.253.103",
    "10.159.42.8",
    "10.246.115.162",
    "10.89.100.106",
    "10.146.24.205",
    "10.83.35.72",
    "10.91.60.46",
    "10.185.60.166",
    "10.186.245.33",
    "10.28.224.117",
    "10.193.232.129",
    "10.245.249.109",
    "10.123.190.193",
    "10.26.199.16",
    "10.224.239.208",
    "10.42.232.210",
    "10.36.219.24",
    "10.48.188.249",
    "10.0.145.9",
    "10.132.104.206",
    "10.5.244.18",
    "10.237.44.69",
    "10.214.68.133",
    "10.156.108.58",
    "10.31.81.31",
    "10.132.118.57",
    "10.37.209.178",
    "10.82.235.66",
    "10.167.80.102",
    "10.206.202.9",
    "10.84.201.235",
    "10.110.147.242",
    "10.3.145.189",
    "10.89.210.175",
    "10.67.183.207",
    "10.113.79.111",
    "10.243.34.136",
    "10.254.22.211",
    "10.64.144.123",
    "10.98.48.168",
    "10.211.153.60",
    "10.177.240.171",
    "10.107.114.211",
    "10.92.180.66",
    "10.66.206.93",
    "10.239.72.172",
    "10.97.218.230",
    "10.151.194.163",
    "10.82.143.104",
    "10.3.48.138",
    "10.92.155.37",
    "10.156.113.192",
    "10.197.112.97",
    "10.51.66.30",
    "10.40.45.21",
    "10.221.170.20",
    "10.151.45.65",
    "10.185.71.192",
    "10.224.128.166",
    "10.91.166.207",
    "10.73.38.158",
    "10.111.188.247",
    "10.160.23.116",
    "10.46.116.106",
    "10.120.13.136",
    "10.219.144.172",
    "10.47.83.76",
    "10.112.6.38",
    "10.135.131.102",
    "10.218.143.91",
    "10.188.112.234",
    "10.84.183.119",
    "10.106.118.192",
    "10.143.80.230",
    "10.222.253.103",
    "10.159.42.8",
    "10.104.29.23",
    "10.87.34.14",
    "10.68.175.139",
    "10.177.203.106",
    "10.248.63.215",
    "10.249.179.112",
    "10.145.68.16",
    "10.101.154.209",
    "10.175.209.159",
    "10.91.78.208",
    "10.247.140.159",
    "10.76.172.156",
    "10.35.203.52",
    "10.89.172.29",
    "10.157.215.232",
    "10.37.226.190",
    "10.102.240.150",
    "10.6.210.35",
    "10.70.133.197",
    "10.52.125.177",
    "10.170.10.188",
    "10.25.126.130",
    "10.192.243.129",
    "10.251.248.61",
    "10.53.169.147",
    "10.250.239.199",
    "10.102.58.142",
    "10.43.141.56",
    "10.175.199.206",
    "10.18.8.12",
    "10.63.20.58",
    "10.182.232.92",
    "10.60.106.12",
    "10.229.36.195",
    "10.13.108.142",
    "10.52.214.194",
    "10.91.179.107",
    "10.248.6.136",
    "10.238.126.15",
    "10.70.92.199",
    "10.252.208.189",
    "10.153.46.201",
    "10.209.222.94",
    "10.126.155.215",
    "10.134.151.53",
    "10.80.130.50",
    "10.153.13.41",
    "10.232.200.59",
    "10.163.224.46",
    "10.158.204.98",
    "10.147.94.102",
    "10.3.226.45",
    "10.243.249.155",
    "10.168.179.243",
    "10.87.182.163",
    "10.102.132.48",
    "10.163.246.30",
    "10.254.251.123",
    "10.64.123.255",
    "10.242.241.63",
    "10.227.58.155",
    "10.101.43.225",
    "10.240.13.221",
    "10.138.161.15",
    "10.38.253.123",
    "10.209.222.94",
    "10.126.155.215",
    "10.134.151.53",
    "10.146.239.73",
    "10.175.189.69",
    "10.0.167.15",
    "10.172.21.61",
    "10.41.8.190",
    "10.201.208.15",
    "10.122.55.166",
    "10.18.170.126",
    "10.252.85.70",
    "10.85.58.76",
    "10.91.32.2",
    "10.105.75.177",
    "10.164.55.250",
    "10.114.185.226",
    "10.192.120.19",
    "10.129.189.150",
    "10.34.53.149",
    "10.147.192.169",
    "10.161.227.233",
    "10.48.237.207",
    "10.2.29.104",
    "10.123.158.21",
    "10.82.143.251",
    "10.73.110.131",
    "10.223.222.246",
    "10.2.134.212",
    "10.130.198.191",
    "10.128.245.7",
    "10.197.162.230",
    "10.192.218.240",
    "10.251.32.230",
    "10.134.177.6",
    "10.44.57.27",
    "10.215.58.155",
    "10.114.230.130",
    "10.54.148.180",
    "10.41.146.129",
    "10.222.172.156",
    "10.160.78.185",
    "10.143.189.42",
    "10.208.230.44",
    "10.250.76.82",
    "10.246.85.4",
    "10.95.180.149",
    "10.43.133.4",
    "10.228.118.162",
    "10.142.154.229",
    "10.90.211.189",
    "10.146.238.157",
    "10.235.101.1",
    "10.159.97.104",
    "10.185.188.154",
    "10.21.161.249",
    "10.188.152.165",
    "10.72.240.168",
    "10.137.82.225",
    "10.123.228.64",
    "10.202.90.147",
    "10.119.173.114",
    "10.62.140.166",
    "10.158.25.62",
    "10.2.29.104",
    "10.123.158.21",
    "10.82.143.251",
    "10.73.110.131",
    "10.223.222.246",
    "10.2.134.212",
    "10.130.198.191",
    "10.128.245.7",
    "10.197.162.230",
    "10.192.218.240",
    "10.251.32.230",
    "10.134.177.6",
    "10.44.57.27",
    "10.119.83.76",
    "10.66.205.140",
    "10.58.235.233",
    "10.54.60.13",
    "10.219.171.252",
    "10.13.84.200",
    "10.241.59.149",
    "10.105.173.124",
    "10.239.101.213",
    "10.70.62.18",
    "10.113.148.174",
    "10.132.66.14",
    "10.213.69.139",
    "10.82.198.129",
    "10.221.98.195",
    "10.180.223.45",
    "10.168.152.82",
    "10.23.3.165",
    "10.122.80.74",
    "10.14.230.47",
    "10.199.74.254",
    "10.174.18.161",
    "10.135.95.130",
    "10.224.208.160",
    "10.46.39.81",
    "10.107.112.74",
    "10.74.196.245",
    "10.17.84.187",
    "10.49.62.65",
    "10.146.83.246",
    "10.202.153.239",
    "10.205.169.104",
    "10.1.132.105",
    "10.177.222.219",
    "10.95.85.158",
    "10.143.173.155",
    "10.98.193.18",
    "10.40.124.74",
    "10.3.187.209",
    "10.234.229.210",
    "10.162.10.95",
    "10.70.50.5",
    "10.21.110.78",
    "10.49.222.247",
    "10.122.214.217",
    "10.73.110.131",
    "10.223.222.246",
    "10.2.134.212",
    "10.130.198.191",
    "10.128.245.7",
    "10.197.162.230",
    "10.241.86.144",
    "10.79.54.124",
    "10.181.165.127",
    "10.26.248.86",
    "10.94.214.146",
    "10.120.45.189",
    "10.110.51.129",
    "10.88.151.93",
    "10.199.47.44",
    "10.247.209.191",
    "10.63.225.13",
    "10.220.172.199",
    "10.67.25.220",
    "10.14.183.242",
    "10.119.152.157",
    "10.117.103.199",
    "10.166.19.40",
    "10.86.49.248",
    "10.149.237.133",
    "10.100.133.52",
    "10.184.142.175",
    "10.101.70.28",
    "10.246.123.23",
    "10.138.171.35",
    "10.107.113.207",
    "10.83.93.254",
    "10.156.34.104",
    "10.26.191.118",
    "10.117.195.22",
    "10.35.80.3",
    "10.8.138.35",
    "10.117.62.9",
    "10.184.64.200",
    "10.151.51.55",
    "10.83.104.101",
    "10.168.174.125",
    "10.161.27.31",
    "10.103.156.60",
    "10.119.182.222",
    "10.63.40.87",
    "10.110.141.169",
    "10.89.46.171",
    "10.137.215.210",
];

const uniqueArray = Array.from(new Set(listIPv4));
const uniqueIpAddressCount = uniqueArray.reduce((total, item) => total + 1, 0);
console.log('Количество уникальных IP адрес: ', uniqueIpAddressCount);