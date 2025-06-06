'use client'

import Image from "next/image";
import { useState, useEffect, useMemo } from 'react'

// Frame arrays moved outside component to prevent recreation on every render
const frames = ['header2_1_t1.png', 'header2_2_t1.png', 'header2_3_t1.png']
const titleFrames = ['title-1.png', 'title-2.png', 'title-3.png']
const spinFrames = [
  'Spinning-kusa-1-1.png', 'Spinning-kusa-1-2.png', 'Spinning-kusa-1-3.png', 'Spinning-kusa-1-4.png', 'Spinning-kusa-1-5.png',
  'Spinning-kusa-1-6.png', 'Spinning-kusa-1-7.png', 'Spinning-kusa-1-8.png', 'Spinning-kusa-1-9.png', 'Spinning-kusa-1-10.png',
  'Spinning-kusa-1-11.png', 'Spinning-kusa-1-12.png', 'Spinning-kusa-1-13.png', 'Spinning-kusa-1-14.png', 'Spinning-kusa-1-15.png',
  'Spinning-kusa-1-16.png', 'Spinning-kusa-1-17.png', 'Spinning-kusa-1-18.png', 'Spinning-kusa-1-19.png', 'Spinning-kusa-1-20.png'
]
const potatoFrames = [
  'Kusa-potato-1-1.png', 'Kusa-potato-1-2.png', 'Kusa-potato-1-3.png', 'Kusa-potato-1-4.png', 'Kusa-potato-1-5.png',
  'Kusa-potato-1-6.png', 'Kusa-potato-1-7.png', 'Kusa-potato-1-8.png', 'Kusa-potato-1-9.png', 'Kusa-potato-1-10.png',
  'Kusa-potato-1-11.png', 'Kusa-potato-1-12.png', 'Kusa-potato-1-13.png', 'Kusa-potato-1-14.png', 'Kusa-potato-1-15.png',
  'Kusa-potato-1-16.png', 'Kusa-potato-1-17.png', 'Kusa-potato-1-18.png', 'Kusa-potato-1-19.png', 'Kusa-potato-1-20.png'
]
const nikiFrames = [
  '_Niki-fly-1-1.png', '_Niki-fly-1-2.png', '_Niki-fly-1-3.png', '_Niki-fly-1-4.png', '_Niki-fly-1-5.png', '_Niki-fly-1-6.png'
]
const yanuFrames = [
  'Yanu-walk-1-1.png', 'Yanu-walk-1-2.png', 'Yanu-walk-1-3.png', 'Yanu-walk-1-4.png', 'Yanu-walk-1-5.png',
  'Yanu-walk-1-6.png', 'Yanu-walk-1-7.png', 'Yanu-walk-1-8.png'
]
const inuFrames = [
  'Inu-run-1-1.png', 'Inu-run-1-2.png', 'Inu-run-1-3.png', 'Inu-run-1-4.png', 'Inu-run-1-5.png',
  'Inu-run-1-6.png', 'Inu-run-1-7.png', 'Inu-run-1-8.png', 'Inu-run-1-9.png', 'Inu-run-1-10.png'
]
const kochoFrames = [
  'Kocho-camera-1-1.png', 'Kocho-camera-1-2.png', 'Kocho-camera-1-3.png', 'Kocho-camera-1-4.png', 'Kocho-camera-1-5.png',
  'Kocho-camera-1-6.png', 'Kocho-camera-1-7.png', 'Kocho-camera-1-8.png', 'Kocho-camera-1-9.png', 'Kocho-camera-1-10.png',
  'Kocho-camera-1-11.png', 'Kocho-camera-1-12.png', 'Kocho-camera-1-13.png', 'Kocho-camera-1-14.png', 'Kocho-camera-1-15.png',
  'Kocho-camera-1-16.png', 'Kocho-camera-1-17.png', 'Kocho-camera-1-18.png', 'Kocho-camera-1-19.png', 'Kocho-camera-1-20.png'
]
const mobFrames = [
  'Mobu-clap-1-1.png', 'Mobu-clap-1-2.png', 'Mobu-clap-1-3.png'
]
const xavierFrames = [
  'Tenshi-Akuma-1-1.png', 'Tenshi-Akuma-1-2.png', 'Tenshi-Akuma-1-3.png', 'Tenshi-Akuma-1-4.png', 'Tenshi-Akuma-1-5.png', 'Tenshi-Akuma-1-6.png'
]

// Function to preload additional frames for smooth animation
const preloadAnimationFrames = (frames: string[], characterName: string, setPreloadedFrames: React.Dispatch<React.SetStateAction<Set<string>>>, preloadedFrames: Set<string>) => {
  console.log(`📦 Preloading additional frames for ${characterName}`)
  
  // Preload first 3 frames for smooth start
  const framesToPreload = frames.slice(0, 3)
  
  framesToPreload.forEach(frame => {
    if (preloadedFrames.has(frame)) return
    
    const img = document.createElement('img')
    img.onload = () => {
      setPreloadedFrames(prev => new Set([...prev, frame]))
      console.log(`✨ Preloaded additional frame: ${frame}`)
    }
    img.onerror = () => {
      console.warn(`❌ Failed to preload additional frame: ${frame}`)
    }
    img.src = `/${frame}`
  })
}

export default function Home() {
  const [currentFrame, setCurrentFrame] = useState(0)

  // Title Animation
  const [currentTitleFrame, setCurrentTitleFrame] = useState(0)

  // Spinning Kusa Animation
  const [currentSpinFrame, setCurrentSpinFrame] = useState(0)

  // Character Gallery State
  const [selectedCharacter, setSelectedCharacter] = useState(0) // Index of selected character
  const [currentCharacterFrame, setCurrentCharacterFrame] = useState(0)

  // Preloading state
  const [preloadedFrames, setPreloadedFrames] = useState<Set<string>>(new Set())

  // Character configuration - memoized to prevent recreation
  const characters = useMemo(() => [
    {
      name: 'くさ',
      frames: potatoFrames,
      fps: 20,
      descriptions: [
        'くいしんぼう（デブ）',
        'あほ',
        'ザコ',
        '急停',
        '法はかでチョロい',
        '忍耐力（防御力）が異常に高い'
      ]
    },
    {
      name: 'ニキ',
      frames: nikiFrames,
      fps: 30,
      descriptions: [
        '超絶ムキムキ',
        '銀河系最強の戦闘能力',
        '振る舞いがオトメ',
        '心優しく正義心が強い',
        'くさを友達だと思っている',
        'くさに痩せてほしい',
        '力加減を知らない',
        'くさと同級生'
      ]
    },
    {
      name: 'ヤヌ',
      frames: yanuFrames,
      fps: 20,
      descriptions: [
        'くさのペット',
        '姑息で狡猾',
        '人間界出身',
        '語尾に「にゃ」をつけたがる',
        'ニキにライバル心を抱いている',
        'しっぽがある',
        'くさの同級生'
      ]
    },
    {
      name: 'イヌ',
      frames: inuFrames,
      fps: 24,
      descriptions: [
        'ニキに命を救われた',
        'バキバキに筋肉をつけようとしている',
        'ニキを尊敬している',
        '真面目',
        '努力家',
        'ニキには感謝している',
        'くさの同級生'
      ]
    },
    {
      name: '校長',
      frames: kochoFrames,
      fps: 20,
      descriptions: [
        'テキトー',
        '金持ち',
        'ノリがいい',
        '趣味は写真',
        'くさ達の学校の校長'
      ]
    },
    {
      name: 'ザビエル・ハエ',
      frames: xavierFrames,
      fps: 24,
      descriptions: [
        '天使と悪魔ぽく登場したが一般人',
        '実は普通',
        '空気が読めない',
        '天然',
        '優しい',
        'くさの同級生'
      ]
    },
    {
      name: 'モブ',
      frames: mobFrames,
      fps: 20,
      descriptions: [
        'モブキャラ'
      ]
    }
  ], [])

  // Preload critical frames on page load
  useEffect(() => {
    const preloadImages = () => {
      console.log('🚀 Starting aggressive preloading...')
      
      // Critical first frames to preload immediately
      const criticalFrames = [
        frames[0], // header2_1_t1.png
        spinFrames[0], // Spinning-kusa-1-1.png
        potatoFrames[0], // Kusa-potato-1-1.png
        nikiFrames[0], // _Niki-fly-1-1.png
        yanuFrames[0], // Yanu-walk-1-1.png
        inuFrames[0], // Inu-run-1-1.png
        kochoFrames[0], // Kocho-camera-1-1.png
        xavierFrames[0], // Tenshi-Akuma-1-1.png
        mobFrames[0] // Mobu-clap-1-1.png
      ]

      let loadedCount = 0
      const totalFrames = criticalFrames.length

      criticalFrames.forEach(frame => {
        const img = document.createElement('img')
        img.onload = () => {
          console.log(`✅ Preloaded: ${frame}`)
          setPreloadedFrames(prev => new Set([...prev, frame]))
          loadedCount++
          if (loadedCount === totalFrames) {
            console.log('🎉 Critical frame preloading complete!')
          }
        }
        img.onerror = () => {
          console.warn(`❌ Failed to preload: ${frame}`)
          loadedCount++
          if (loadedCount === totalFrames) {
            console.log('🎉 Critical frame preloading complete!')
          }
        }
        img.src = `/${frame}`
      })
    }

    preloadImages()
  }, [])



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length)
    }, 100) // 10fps = 100ms per frame

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleFrame((prev) => (prev + 1) % titleFrames.length)
    }, 120) // 8fps = 120ms per frame

    return () => clearInterval(interval)
  }, [])

  // Selected character animation
  useEffect(() => {
    const selectedChar = characters[selectedCharacter]
    if (!selectedChar) return

    console.log(`🎬 Starting animation for ${selectedChar.name} at ${selectedChar.fps}fps`)
    
    // Preload frames for the selected character IMMEDIATELY
    preloadAnimationFrames(selectedChar.frames, selectedChar.name, setPreloadedFrames, preloadedFrames)
    
    // Start animation immediately without waiting
    const interval = setInterval(() => {
      setCurrentCharacterFrame(prev => (prev + 1) % selectedChar.frames.length)
    }, 1000 / selectedChar.fps)

    return () => {
      console.log(`⏹️ Stopping animation for ${selectedChar.name}`)
      clearInterval(interval)
    }
  }, [selectedCharacter, characters])

  // Handle character selection - optimized for immediate response
  const handleCharacterSelect = (index: number) => {
    console.log(`👆 Selected character: ${characters[index].name}`)
    
    // Preload the new character's frames immediately before switching
    const newChar = characters[index]
    preloadAnimationFrames(newChar.frames, newChar.name, setPreloadedFrames, preloadedFrames)
    
    // Set both the character and frame simultaneously 
    setSelectedCharacter(index)
    setCurrentCharacterFrame(0)
  }

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const documentHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollProgress = Math.min(scrollY / documentHeight, 1) // 0 to 1
          const doubleProgress = (scrollProgress * 2) % 1 // 0 to 1, twice
          const frameIndex = Math.floor(doubleProgress * spinFrames.length)
          setCurrentSpinFrame(frameIndex)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Fixed Header with Frame Animation */}
      <header 
        className="fixed top-0 left-0 w-full z-[9999] overflow-hidden"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: '100px'
        }}
      >
        {/* Animated Frame Images */}
        <div className="absolute inset-0 w-full h-full">
        <Image
            src={`/${frames[currentFrame]}`}
            alt="Header animation"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
            sizes="100vw"
            quality={100}
            unoptimized={true}
          priority
        />
        </div>

        {/* Header Content Container */}
        <div className="relative z-10 h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
          
          {/* Left Spacer to balance the right-side icons - hidden on mobile */}
          <div className="hidden sm:block" style={{ width: '120px' }} />

          {/* Centered Logo/Title */}
          <div className="flex-shrink-0">
            <Image
              src={`/${titleFrames[currentTitleFrame]}`}
              alt="Drinkable Kusa Logo"
              width={150}
              height={45}
              className="object-contain sm:w-[180px] sm:h-[54px] md:w-[200px] md:h-[60px]"
              priority
            />
          </div>

          {/* Right Side - Navigation Icons */}
          <div className="flex items-center justify-end gap-2 sm:gap-3" style={{ width: '120px' }}>
            {/* LINE Icon */}
            <a 
              href="#" 
            target="_blank"
            rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                width: '36px',
                height: '36px',
                padding: '8px'
              }}
              aria-label="LINE"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]">
                <path d="M19.365 9.863c.349 0 .63.285.631.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" fill="white"/>
              </svg>
            </a>

            {/* Store Icon */}
            <a 
              href="#" 
          target="_blank"
          rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                width: '36px',
                height: '36px',
                padding: '8px'
              }}
              aria-label="Store"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]">
                <path d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5H5.21L4.27 3H1ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18Z" fill="white"/>
              </svg>
            </a>

            {/* YouTube Icon */}
            <a 
              href="https://www.youtube.com/@drinkable_" 
          target="_blank"
          rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                width: '36px',
                height: '36px',
                padding: '8px'
              }}
              aria-label="YouTube"
            >
              <svg width="20" height="15" viewBox="0 0 24 17" fill="none" className="sm:w-[22px] sm:h-[16px] md:w-[24px] md:h-[17px]">
                <path d="M23.498 2.686a3.016 3.016 0 0 0-2.122-2.136C19.505 0.045 12 0.045 12 0.045s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 2.686C0 4.57 0 8.5 0 8.5s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 12.43 24 8.5 24 8.5s0-3.93-.502-5.814z" fill="#FFFFFF"/>
                <path d="M9.545 12.068V4.932L15.818 8.5l-6.273 3.568z" fill="#FF0000"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden" style={{
          height: '100vh',
          minHeight: '400px'
        }}>
          {/* Background Video - Responsive - TEMPORARILY DISABLED FOR TESTING */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover sm:object-contain"
            style={{
              zIndex: 0
            }}
          >
            <source src="/hero4_proxy_compressed.mov" type="video/mp4" />
          </video> */}
          
          {/* Content overlay */}
          <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-8 md:px-16 lg:px-24">
            <div className="text-center">
              {/* Hero content can go here if needed */}
            </div>
          </div>
        </section>

        {/* Character Description Section - Responsive */}
        <section className="bg-white min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 pb-32 sm:pb-40 lg:pb-48">
          <div className="max-w-6xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-black">
              キャラクター
            </h1>
            
            {/* Character Gallery */}
            <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
              
              {/* Character Thumbnails */}
              <div className="w-full max-w-4xl">
                <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3 lg:gap-4 justify-items-center">
                  {characters.map((character, index) => (
                    <button
                      key={index}
                      onClick={() => handleCharacterSelect(index)}
                      className={`relative group transition-all duration-300 rounded-2xl overflow-hidden border-0 outline-0 ${
                        selectedCharacter === index 
                          ? 'scale-110 shadow-2xl shadow-green-400/40 bg-gradient-to-br from-green-100 to-green-200' 
                          : 'hover:scale-105 shadow-lg hover:shadow-xl bg-transparent hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100'
                      }`}
                      style={{ border: 'none', outline: 'none', background: selectedCharacter === index ? '' : 'transparent' }}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 p-2">
                        <img
                          src={`/${character.frames[0]}`}
                          alt={`${character.name} thumbnail`}
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                          loading="eager"
                          draggable={false}
                        />
                      </div>
                      
                      {/* Selection indicator */}
                      {selectedCharacter === index && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        </div>
                      )}
                      

                    </button>
                  ))}
                </div>
                <div className="text-center mt-3 text-xs text-gray-500 font-medium">
                  タップして選択
                </div>
              </div>

              {/* Selected Character Animation & Info */}
              <div className="w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12 w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-gray-200/50">
                  
                  {/* Large Animation Area */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={`/${characters[selectedCharacter].frames[currentCharacterFrame]}`}
                        alt={`${characters[selectedCharacter].name} animation`}
                        width={300}
                        height={300}
                        className="object-contain sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]"
                        loading="eager"
                        draggable={false}
                      />

                    </div>
                  </div>

                  {/* Character Information */}
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 text-gray-800">
                      {characters[selectedCharacter].name}
                    </h2>
                    <div className="bg-gradient-to-br from-green-50/80 to-green-100/50 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
                      <ul className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                        {characters[selectedCharacter].descriptions.map((description, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 font-bold mr-3 sm:mr-4 flex-shrink-0 text-lg">✦</span>
                            <span>{description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        
        {/* Bottom spacer to ensure content is visible above footer - 100px footer + extra space */}
        <div style={{ height: '150px' }}></div>
      </main>

      {/* Fixed Footer with Upside Down Animation */}
      <footer 
        className="fixed bottom-0 left-0 w-full z-[9999] overflow-hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          height: '100px'
        }}
      >
        {/* Animated Frame Images - Upside Down */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={`/${frames[currentFrame]}`}
            alt="Footer animation"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              transform: 'scaleY(-1)'
            }}
            sizes="100vw"
            quality={100}
            unoptimized={true}
            priority
          />
        </div>
      </footer>

      {/* Fixed Bottom-Right Spinning Kusa - Responsive */}
      <div 
        className="fixed z-[10000] spinning-kusa-container"
        style={{
          bottom: '110px', // 100px footer height + 10px gap
          right: '20px',
          width: '80px',
          height: '80px',
        }}
      >
        <Image
          src={`/${spinFrames[currentSpinFrame]}`}
          alt="Spinning Kusa"
          fill
          sizes="(max-width: 640px) 80px, 140px"
          style={{
            objectFit: 'contain'
          }}
          priority
        />
    </div>

      {/* CSS for responsive spinning kusa */}
      <style jsx>{`
        @media (min-width: 640px) {
          .spinning-kusa-container {
            right: 50px !important;
            width: 140px !important;
            height: 140px !important;
          }
        }
      `}</style>
    </>
  );
}
