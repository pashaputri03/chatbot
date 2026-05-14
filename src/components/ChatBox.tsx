import { useState } from 'react'

export default function ChatBox() {
  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hai beauty! 💕 Yuk mulai dengan analisa kulitmu dulu. Kulitmu tipe apa ya? (berminyak, kering, kombinasi, sensitif, atau normal?)',
      time: '03:21 PM',
    },

    {
      role: 'user',
      content: 'kulit kombinasi',
      time: '03:22 PM',
    },

    {
      role: 'assistant',
      content:
        'Perfect! Kulit kombinasi biasanya berminyak di area T (dahi, hidung, dagu) dan kering di pipi. Aku bisa bantu kasih rekomendasi skincare yang seimbang untuk kulit kombinasi kamu ✨',
      time: '03:22 PM',
    },
  ])

  const features = [
    {
      title: 'Kulitmu',
      emoji: '🪄',
      desc: 'Analisa & solusi perawatan kulit',
    },

    {
      title: 'Produk',
      emoji: '🧴',
      desc: 'Rekomendasi produk terbaik untukmu',
    },

    {
      title: 'Tips & Trik',
      emoji: '💄',
      desc: 'Tips kecantikan dan perawatan',
    },

    {
      title: 'Masalah Kulit',
      emoji: '💗',
      desc: 'Cari tahu & atasi masalah kulitmu',
    },

    {
      title: 'Rutin Skincare',
      emoji: '✨',
      desc: 'Buat rutinitas skincare yang pas untukmu',
    },

    {
      title: 'Ngobrol Santai',
      emoji: '💬',
      desc: 'Tanya apa aja soal beauty & skincare',
    },
  ]

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const handleFeatureClick = (
    title: string
  ) => {
    const userMessage = {
      role: 'user',
      content: title,
      time: getTime(),
    }

    const botReply = {
      role: 'assistant',
      content:
        'Hai beauty 💕 Aku siap bantu tentang ' +
        title,
      time: getTime(),
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      botReply,
    ])
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      role: 'user',
      content: input,
      time: getTime(),
    }

    const botReply = {
      role: 'assistant',
      content:
        'Achaélle AI sedang memproses pertanyaanmu 💖',
      time: getTime(),
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      botReply,
    ])

    setInput('')
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg,#ffe7f2,#fff4f8,#ffe9f3)',
        padding: '14px',
        fontFamily: 'Poppins, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* BACKGROUND */}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top left, rgba(255,255,255,0.7), transparent 30%)',
        }}
      />

      {/* SPARKLES */}

      <div
        style={{
          position: 'absolute',
          top: '35px',
          left: '380px',
          color: '#fff',
          fontSize: '26px',
        }}
      >
        ✦
      </div>

      <div
        style={{
          position: 'absolute',
          top: '90px',
          left: '520px',
          color: '#fff',
          fontSize: '18px',
        }}
      >
        ✦
      </div>

      <div
        style={{
          position: 'absolute',
          top: '40px',
          right: '210px',
          color: '#fff',
          fontSize: '22px',
        }}
      >
        ✦
      </div>

      {/* LEAF */}

      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '30px',
          fontSize: '190px',
          opacity: 0.1,
        }}
      >
        🌿
      </div>

      <div
        style={{
          position: 'absolute',
          left: '-20px',
          bottom: '-20px',
          fontSize: '170px',
          opacity: 0.07,
        }}
      >
        🌿
      </div>

      {/* MAIN */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '330px 1fr',
          gap: '18px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* SIDEBAR */}

        <div
          style={{
            background:
              'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(16px)',
            borderRadius: '28px',
            padding: '24px',
            border:
              '1px solid rgba(255,255,255,0.5)',
            minHeight: '95vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/achaelle-logo.png"
              alt="logo"
              style={{
                width: '220px',
                marginBottom: '10px',
              }}
            />
          </div>

          <h1
            style={{
              textAlign: 'center',
              fontSize: '60px',
              color: '#ef3f98',
              fontFamily:
                'Playfair Display',
              marginBottom: '12px',
            }}
          >
            Achaélle AI
          </h1>

          <p
            style={{
              textAlign: 'center',
              color: '#b0588d',
              fontSize: '18px',
              marginBottom: '40px',
            }}
          >
            ✨ Glow softly, shine beautifully ✨
          </p>

          <div
            style={{
              background:
                'rgba(255,255,255,0.6)',
              borderRadius: '22px',
              padding: '24px',
              border:
                '1px solid #ffd4e8',
            }}
          >
            <h2
              style={{
                color: '#ff3d9a',
                marginBottom: '14px',
                fontSize: '20px',
              }}
            >
              Hai beautiful! 💕
            </h2>

            <p
              style={{
                color: '#6e3356',
                lineHeight: 1.8,
                fontSize: '15px',
              }}
            >
              Aku siap bantu rekomendasi
              skincare, makeup, dan haircare
              terbaik untuk kamu ✨
            </p>
          </div>
        </div>

        {/* RIGHT */}

        <div>
          {/* HEADER */}

          <div
            style={{
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            <h1
              style={{
                fontSize: '86px',
                color: '#ef3f98',
                fontFamily:
                  'Playfair Display',
                marginBottom: '6px',
              }}
            >
              ✦ Achaélle AI ✦
            </h1>

            <p
              style={{
                color: '#b0588d',
                fontSize: '22px',
              }}
            >
              ✨ Glow softly, shine beautifully ✨
            </p>
          </div>

          {/* FEATURES */}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(6,1fr)',
              gap: '16px',
              marginBottom: '18px',
            }}
          >
            {features.map((item) => (
              <div
                key={item.title}
                onClick={() =>
                  handleFeatureClick(
                    item.title
                  )
                }
                style={{
                  background:
                    'rgba(255,255,255,0.55)',
                  backdropFilter:
                    'blur(10px)',
                  borderRadius: '22px',
                  padding: '24px 18px',
                  textAlign: 'center',
                  border:
                    '1px solid #ffd6ea',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
              >
                <div
                  style={{
                    width: '82px',
                    height: '82px',
                    margin:
                      '0 auto 18px',
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg,#fff0f7,#ffe0f0)',
                    display: 'flex',
                    justifyContent:
                      'center',
                    alignItems: 'center',
                    fontSize: '36px',
                  }}
                >
                  {item.emoji}
                </div>

                <h2
                  style={{
                    color: '#ff3d9a',
                    fontSize: '18px',
                    marginBottom: '12px',
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: '#5d3150',
                    lineHeight: 1.8,
                    fontSize: '14px',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CHAT */}

          <div
            style={{
              background:
                'rgba(255,255,255,0.45)',
              backdropFilter: 'blur(16px)',
              borderRadius: '28px',
              padding: '28px',
              height: '520px',
              border:
                '1px solid rgba(255,255,255,0.5)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* MESSAGES */}

            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                paddingRight: '8px',
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:
                      msg.role === 'user'
                        ? 'flex-end'
                        : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-end',
                      maxWidth: '75%',
                    }}
                  >
                    {msg.role ===
                      'assistant' && (
                      <img
                        src="/achaelle-logo.png"
                        alt="logo"
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius:
                            '50%',
                        }}
                      />
                    )}

                    <div
                      style={{
                        background:
                          msg.role ===
                          'user'
                            ? 'linear-gradient(135deg,#ffb7da,#ff78ba)'
                            : 'rgba(255,255,255,0.7)',

                        padding:
                          '18px 22px',

                        borderRadius:
                          '22px',

                        color:
                          msg.role ===
                          'user'
                            ? '#5b2140'
                            : '#5d3150',

                        lineHeight: 1.8,

                        fontSize: '15px',
                      }}
                    >
                      {msg.content}
                    </div>
                  </div>

                  <span
                    style={{
                      marginTop: '8px',
                      color: '#9c8b96',
                      fontSize: '13px',
                    }}
                  >
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>

            {/* INPUT */}

            <div
              style={{
                display: 'flex',
                gap: '14px',
              }}
            >
              <input
                type="text"
                value={input}
                placeholder="Tanyakan apa saja tentang skincare, makeup, atau perawatan diri..."
                onChange={(e) =>
                  setInput(e.target.value)
                }
                style={{
                  flex: 1,
                  padding: '22px',
                  borderRadius: '22px',
                  border:
                    '1px solid #ffd6ea',
                  outline: 'none',
                  background:
                    'rgba(255,255,255,0.8)',
                  fontSize: '16px',
                  color: '#6e3356',
                }}
              />

              <button
                onClick={handleSend}
                style={{
                  width: '95px',
                  border: 'none',
                  borderRadius: '22px',
                  background:
                    'linear-gradient(135deg,#ff8dc5,#ff4fa3)',
                  color: 'white',
                  fontSize: '28px',
                  cursor: 'pointer',
                }}
              >
                ✈
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}