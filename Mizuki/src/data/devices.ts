// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus 5 Ultra",
			image: "/images/device/OnePlus5png.png",
			specs: "Blue / 16G + 512GB",
			description:
				"100W 超级闪充",
			link: "https://www.oneplus.com/cn/ace-5-ultra",
		},
	],
	Router: [
		{
			name: "未知",
			image: "/images/device/mt3000.png",
			specs: "1000Mbps / 2.5G/5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/",
		},
	],
};
