/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static HTML 내보내기 설정
  assetPrefix: "./", // 상대 경로 설정
  images: {
    unoptimized: true, // GitHub Pages 배포를 위해 이미지 최적화 비활성화
  },
};

module.exports = nextConfig;
