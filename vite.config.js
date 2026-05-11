import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/pub-auto-builder/", // ★ 이 줄을 추가하세요 (저장소 이름 양옆에 슬래시 필수!)
})