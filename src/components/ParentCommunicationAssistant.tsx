import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  Mail, 
  MessageSquare, 
  Copy, 
  Sparkles, 
  Globe, 
  Languages, 
  CheckCircle2, 
  Heart,
  Briefcase,
  ListTodo
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Tone definition type
type ToneType = 'empathetic' | 'professional' | 'direct' | 'warm' | 'enthusiastic';
type ChannelType = 'email' | 'sms';
type LanguageType = 'none' | 'spanish' | 'vietnamese' | 'arabic';
type ReasonType = 'academic' | 'behavior' | 'missing_work';

interface ToneOption {
  id: ToneType;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  color: string;
}

const ParentCommunicationAssistant: React.FC = () => {
  const [channel, setChannel] = useState<ChannelType>('email');
  const [studentName, setStudentName] = useState('Marcus');
  const [parentName, setParentName] = useState('Mrs. Vance');
  const [tone, setTone] = useState<ToneType>('warm');
  const [language, setLanguage] = useState<LanguageType>('none');
  const [reason, setReason] = useState<ReasonType>('behavior');
  const [anecdotes, setAnecdotes] = useState(
    "Marcus did an extraordinary job in today's science lab. He helped another classmate clean up their water spill, and correctly explained the inputs of photosynthesis during our guided roleplay!"
  );
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [draftEnglish, setDraftEnglish] = useState('');
  const [draftTranslation, setDraftTranslation] = useState('');
  const [subject, setSubject] = useState('');
  const [copied, setCopied] = useState(false);

  // Core 5-Tone Model Hub Options
  const toneOptions: ToneOption[] = [
    { 
      id: 'empathetic', 
      name: 'Empathetic', 
      icon: Heart, 
      description: 'Focuses heavily on support, growth, and collaborative care.',
      color: 'text-rose-500 bg-rose-50 border-rose-100 hover:border-rose-300'
    },
    { 
      id: 'professional', 
      name: 'Professional', 
      icon: Briefcase, 
      description: 'Structured, formal, and objective academic tone.',
      color: 'text-indigo-500 bg-indigo-50 border-indigo-100 hover:border-indigo-300'
    },
    { 
      id: 'direct', 
      name: 'Direct', 
      icon: ListTodo, 
      description: 'Clear, concise, and focused on bulleted actionable items.',
      color: 'text-slate-600 bg-slate-50 border-slate-200 hover:border-slate-300'
    },
    { 
      id: 'warm', 
      name: 'Warm', 
      icon: CheckCircle2, 
      description: 'Friendly, reassuring, and highly collaborative style.',
      color: 'text-teal-600 bg-teal-50 border-teal-100 hover:border-teal-300'
    },
    { 
      id: 'enthusiastic', 
      name: 'Enthusiastic', 
      icon: Sparkles, 
      description: 'High energy, positive reinforcement, and celebratory.',
      color: 'text-amber-500 bg-amber-50 border-amber-100 hover:border-amber-300'
    }
  ];

  // Dynamic Content Generation Rules based on selections
  const generateDraftContent = () => {
    // Subject lines based on reason and tone
    let subjectLine = '';
    let englishText = '';
    let translationText = '';

    if (reason === 'behavior') {
      switch (tone) {
        case 'empathetic':
          subjectLine = `Supporting ${studentName} - Classroom Kindness and Achievements`;
          englishText = `Dear ${parentName},\n\nI wanted to share a heartwarming moment involving ${studentName} in class today. \n\n${anecdotes}\n\nMoments like these show how deeply ${studentName} cares for the classroom community. We want to continue fostering this supportive environment together. Thank you for your partnership!`;
          
          if (language === 'spanish') {
            translationText = `Estimada ${parentName},\n\nQuería compartir un momento muy tierno en el que participó ${studentName} hoy en clase.\n\n${anecdotes.replace(/Marcus/g, studentName).replace(/photosynthesis/g, 'fotosíntesis').replace(/science/g, 'ciencias')}\n\nMomentos como este demuestran lo mucho que ${studentName} se preocupa por nuestra comunidad escolar. Queremos seguir fomentando juntos este ambiente de apoyo. ¡Gracias por su valiosa colaboración en el hogar!`;
          } else if (language === 'vietnamese') {
            translationText = `Kính gửi ${parentName},\n\nTôi muốn chia sẻ một khoảnh khắc ấm áp liên quan đến ${studentName} trong lớp học ngày hôm nay.\n\n${studentName} đã hoàn thành xuất sắc nhiệm vụ trong phòng thí nghiệm hôm nay. Em đã giúp một bạn học khác dọn dẹp phần nước bị tràn, và giải thích chính xác các yếu tố đầu vào của quá trình quang hợp!\n\nNhững khoảnh khắc như thế này cho thấy em luôn quan tâm đến tập thể lớp học. Cảm ơn sự đồng hành của quý phụ huynh!`;
          } else if (language === 'arabic') {
            translationText = `عزيزتي ${parentName}،\n\nأردت أن أشاركك لحظة دافئة تخص ${studentName} في الفصل اليوم.\n\nلقد قام ${studentName} بعمل استثنائي في مختبر العلوم اليوم. حيث ساعد زميلًا آخر في تنظيف المياه المنسكبة، وشرح بشكل صحيح مدخلات عملية التمثيل الضوئي!\n\nمثل هذه اللحظات تظهر مدى اهتمام ${studentName} بمجتمعنا الدراسي. شكرًا لتعاونكم معنا!`;
          }
          break;

        case 'professional':
          subjectLine = `Classroom Participation and Conduct Update — ${studentName}`;
          englishText = `Dear ${parentName},\n\nI am writing to provide you with an objective update regarding ${studentName}'s academic participation and personal conduct in class today.\n\n${anecdotes}\n\nThis behavior demonstrates solid civic compliance and a strong comprehension of our current science standards. Thank you for supporting ${studentName}'s progress.`;
          
          if (language === 'spanish') {
            translationText = `Estimada ${parentName},\n\nLe escribo para proporcionarle una actualización objetiva sobre la participación académica y la conducta personal de ${studentName} hoy en clase.\n\n${anecdotes.replace(/Marcus/g, studentName).replace(/photosynthesis/g, 'fotosíntesis').replace(/science/g, 'ciencias')}\n\nEste comportamiento demuestra una sólida responsabilidad cívica y una excelente comprensión de nuestros estándares de ciencias actuales. Gracias por apoyar el progreso de ${studentName}.`;
          } else if (language === 'vietnamese') {
            translationText = `Kính gửi ${parentName},\n\nTôi viết thư này để cung cấp cho quý phụ huynh một bản cập nhật khách quan về sự tham gia học tập và hành vi cá nhân của ${studentName} trong lớp hôm nay.\n\nEm đã hoàn thành xuất sắc nhiệm vụ trong phòng thí nghiệm khoa học hôm nay. Em giúp bạn lau dọn nước đổ và giải thích đúng kiến thức khoa học.\n\nHành vi này thể hiện trách nhiệm tập thể tốt và khả năng hiểu bài xuất sắc. Trân trọng cảm ơn quý phụ huynh.`;
          } else if (language === 'arabic') {
            translationText = `عزيزتي ${parentName}،\n\nأكتب إليك لتزويدك بتقرير موضوعي بشأن مشاركة ${studentName} الأكاديمية وسلوكه الشخصي في الفصل اليوم.\n\nلقد أظهر سلوكًا مسؤولاً بمساعدة زميل له في تنظيف المياه، كما أثبت فهمًا ممتازًا للمادة العلمية.\n\nنشكركم على دعمكم المستمر لتقدم ${studentName}.`;
          }
          break;

        case 'direct':
          subjectLine = `Science Class Update: ${studentName}`;
          englishText = `Dear ${parentName},\n\nHere is a quick summary of ${studentName}'s performance in science class today:\n\n• Safety/Helpfulness: Helped clean up a water spill for a peer.\n• Academic: Accurately explained photosynthesis inputs during active review.\n\nPlease let me know if you have any questions or feedback.`;
          
          if (language === 'spanish') {
            translationText = `Estimada ${parentName},\n\nAquí tiene un resumen rápido del desempeño de ${studentName} en la clase de ciencias de hoy:\n\n• Seguridad/Compañerismo: Ayudó a limpiar un derrame de agua para un compañero.\n• Académico: Explicó con precisión los aportes de la fotosíntesis durante el repaso activo.\n\nPor favor, avíseme si tiene alguna pregunta.`;
          } else if (language === 'vietnamese') {
            translationText = `Kính gửi ${parentName},\n\nDưới đây là tóm tắt nhanh về kết quả học tập của ${studentName} trong lớp hôm nay:\n\n• Giúp đỡ bạn bè: Giúp lau dọn nước bị đổ.\n• Học tập: Giải thích chính xác quá trình quang hợp.\n\nVui lòng liên hệ nếu quý vị có bất kỳ câu hỏi nào.`;
          } else if (language === 'arabic') {
            translationText = `عزيزتي ${parentName}،\n\nإليك ملخص سريع لأداء ${studentName} في فصل العلوم اليوم:\n\n• المساعدة: ساعد في تنظيف انسكاب المياه لزميل له.\n• الجانب الأكاديمي: شرح بدقة عملية التمثيل الضوئي.\n\nيرجى التواصل إذا كانت لديكم أي استفسارات.`;
          }
          break;

        case 'warm':
          subjectLine = `Wonderful news regarding ${studentName} in class today!`;
          englishText = `Dear ${parentName},\n\nI wanted to reach out and share some wonderful news about ${studentName}'s behavior in class today!\n\n${anecdotes}\n\nWe are so glad to have ${studentName} in our 4th Grade class. Thank you for all of your support at home!\n\nWarmest regards,\n\nMs. Jenkins`;
          
          if (language === 'spanish') {
            translationText = `Estimada ${parentName},\n\n¡Quería comunicarme con usted para compartirle excelentes noticias sobre el comportamiento de ${studentName} hoy en clase!\n\n${anecdotes.replace(/Marcus/g, studentName).replace(/photosynthesis/g, 'fotosíntesis').replace(/science/g, 'ciencias')}\n\nEstamos muy contentos de tener a ${studentName} en nuestra clase de 4.º grado. ¡Gracias por todo su apoyo en casa!\n\nUn cordial saludo,\n\nSra. Jenkins`;
          } else if (language === 'vietnamese') {
            translationText = `Kính gửi ${parentName},\n\nTôi rất vui mừng được chia sẻ một tin vui về hành vi của ${studentName} trong lớp ngày hôm nay!\n\nEm đã hoàn thành xuất sắc nhiệm vụ trong phòng thí nghiệm hôm nay. Giúp đỡ bạn bè nhiệt tình và hiểu bài rất nhanh.\n\nChúng tôi rất hạnh phúc khi có ${studentName} trong lớp 4 này. Cảm ơn sự hỗ trợ tuyệt vời từ gia đình!\n\nTrân trọng,\n\nCô Jenkins`;
          } else if (language === 'arabic') {
            translationText = `عزيزتي ${parentName}،\n\nأردت التواصل معك لمشاركتك أخبارًا رائعة حول سلوك ${studentName} في الفصل اليوم!\n\nلقد قام بعمل استثنائي في المختبر وساعد زميلاً له بكل لطف وأظهر فهمًا رائعًا للدرس.\n\nنحن سعداء جدًا بوجود ${studentName} معنا في الصف الرابع. شكراً لدعمكم!\n\nأطيب التحيات،\n\nالآنسة جينكينز`;
          }
          break;

        case 'enthusiastic':
          subjectLine = `${studentName} was an absolute star in science class today! 🌟`;
          englishText = `Hi ${parentName}!\n\nI am absolutely thrilled to let you know how incredibly ${studentName} shone in class today! 🎉\n\nDuring our science lab, ${studentName} was a total superstar. Not only did they immediately step up to help a classmate clean up a water spill, but they also blew the class away by perfectly explaining photosynthesis!\n\nWe are so incredibly proud of them! Have an amazing evening! 🚀`;
          
          if (language === 'spanish') {
            translationText = `¡Hola ${parentName}!\n\n¡Estoy absolutamente encantada de informarle lo increíble que brilló ${studentName} hoy en clase! 🎉\n\nDurante nuestro laboratorio de ciencias, ${studentName} fue una superestrella total. No solo ayudó de inmediato a un compañero a limpiar un derrame, ¡sino que asombró a todos al explicar perfectamente la fotosíntesis!\n\n¡Estamos sumamente orgullosos de ellos! ¡Que tenga una excelente tarde! 🚀`;
          } else if (language === 'vietnamese') {
            translationText = `Xin chào ${parentName}!\n\nTôi vô cùng hào hứng báo tin rằng ${studentName} đã tỏa sáng rực rỡ trong lớp hôm nay! 🎉\n\nTrong giờ thực hành, em đã thể hiện xuất sắc, chủ động giúp bạn dọn dẹp và trả lời câu hỏi cực kỳ thông minh!\n\nChúng tôi rất tự hào về em! Chúc gia đình một buổi tối tuyệt vời! 🚀`;
          } else if (language === 'arabic') {
            translationText = `مرحباً ${parentName}!\n\nأنا متحمسة للغاية لأخبرك كيف تألق ${studentName} بشكل لا يصدق في الفصل اليوم! 🎉\n\nلقد كان نجمًا حقيقيًا في مختبر العلوم، حيث بادر بمساعدة زميله وأبهر الجميع بإجابته الذكية!\n\nنحن فخورون به للغاية! أتمنى لك أمسية رائعة! 🚀`;
          }
          break;
      }
    } else if (reason === 'academic') {
      subjectLine = `Academic Update — ${studentName}'s Progress`;
      englishText = `Dear ${parentName},\n\nI am writing to share some positive details on ${studentName}'s recent academic progress. ${studentName} has been showing active focus and putting great effort into our curriculum tasks.\n\nSpecifically: ${anecdotes}\n\nKeep up the great work, and thank you for supporting learning at home!`;
      
      if (language === 'spanish') {
        translationText = `Estimada ${parentName},\n\nLe escribo para compartir algunos detalles positivos sobre el progreso académico reciente de ${studentName}. Ha estado mostrando un enfoque activo y un gran esfuerzo en las tareas escolares.\n\nEspecíficamente: ${anecdotes.replace(/Marcus/g, studentName)}\n\n¡Sigan con el gran trabajo y gracias por apoyar el aprendizaje en casa!`;
      } else if (language === 'vietnamese') {
        translationText = `Kính gửi ${parentName},\n\nTôi viết thư này để chia sẻ một số chi tiết tích cực về tiến bộ học tập gần đây của ${studentName}. Em đã thể hiện sự tập trung cao độ và nỗ lực tuyệt vời.\n\nCụ thể là: ${anecdotes}\n\nHãy tiếp tục phát huy và cảm ơn gia đình đã đồng hành cùng nhà trường!`;
      } else if (language === 'arabic') {
        translationText = `عزيزتي ${parentName}،\n\nأكتب إليك لمشاركة بعض التفاصيل الإيجابية حول تقدم ${studentName} الأكاديمي الأخير. لقد أبدى تركيزًا واجتهادًا كبيرًا في أداء مهامه.\n\nعلى وجه الخصوص: ${anecdotes}\n\nاستمروا في هذا العمل الرائع، وشكراً لدعمكم الدراسي في المنزل!`;
      }
    } else if (reason === 'missing_work') {
      subjectLine = `Support Needed: Missing Assignment for ${studentName}`;
      englishText = `Dear ${parentName},\n\nI am reaching out to request your assistance. ${studentName} is currently missing an assignment. We want to make sure they do not fall behind.\n\nDetails / Context: ${anecdotes}\n\nPlease help ${studentName} complete this so we can keep their progress on track. Thank you!`;
      
      if (language === 'spanish') {
        translationText = `Estimada ${parentName},\n\nMe comunico con usted para solicitar su valiosa ayuda. A ${studentName} le hace falta una tarea importante y no queremos que se quede atrás.\n\nDetalles: ${anecdotes.replace(/Marcus/g, studentName)}\n\nPor favor, ayude a ${studentName} a completar esto para mantener su progreso al día. ¡Muchas gracias!`;
      } else if (language === 'vietnamese') {
        translationText = `Kính gửi ${parentName},\n\nTôi muốn nhờ quý phụ huynh hỗ trợ. Hiện tại ${studentName} đang thiếu một bài tập về nhà và chúng tôi không muốn em bị tụt lại phía sau.\n\nChi tiết: ${anecdotes}\n\nVui lòng giúp em hoàn thành sớm để theo kịp tiến độ của lớp. Trân trọng cảm ơn!`;
      } else if (language === 'arabic') {
        translationText = `عزيزتي ${parentName}،\n\nأتواصل معك لطلب مساعدتك الكريمة. هناك فرض منزلي فائت لـ ${studentName} ونريد التأكد من عدم تأخره عن زملائه.\n\nالتفاصيل: ${anecdotes}\n\nيرجى مساعدة ${studentName} في إكمال هذا الفرض لنبقي تقدمه الدراسي في المسار الصحيح. شكرًا لك!`;
      }
    }

    // Format for SMS if selected
    if (channel === 'sms') {
      subjectLine = "Smartphone SMS Broadcast";
      const smsPrefix = `[EduLift AI SMS to ${parentName}]: `;
      switch (tone) {
        case 'empathetic':
          englishText = `${smsPrefix}Hi Mrs. Vance, I wanted to share a quick update about ${studentName}! Today, they did an amazing job helping a classmate clean a spill and participated beautifully. We are so proud! - Ms. Jenkins`;
          break;
        case 'professional':
          englishText = `Lincoln Elementary Notice: ${studentName} demonstrated strong standard understanding and peer cooperation during science laboratory exercises today. Ms. Jenkins`;
          break;
        case 'direct':
          englishText = `${smsPrefix}${studentName} update today: Helped clean water spill, correctly answered photosynthesis questions during review. Ms. Jenkins`;
          break;
        case 'warm':
          englishText = `${smsPrefix}Hi Mrs. Vance! Marcus was fantastic in class today! He helped a classmate clean a spill and excelled in science. Have a great day! - Ms. Jenkins`;
          break;
        case 'enthusiastic':
          englishText = `${smsPrefix}Marcus was a superstar today! 🌟 Helped clean up a spill & explained photosynthesis perfectly! So incredibly proud! 🎉 Ms. Jenkins`;
          break;
      }
      
      if (language === 'spanish') {
        translationText = `[SMS traducido]: Hola Sra. Vance, ¡Marcus fue una superestrella hoy! 🌟 Ayudó a limpiar un derrame y explicó la fotosíntesis perfectamente. ¡Muy orgullosa! 🎉 Sra. Jenkins`;
      } else if (language !== 'none') {
        translationText = `[SMS translated in ${language}]: Action: ${studentName} performed exceptionally in class today!`;
      }
    }

    setSubject(subjectLine);
    setDraftEnglish(englishText);
    setDraftTranslation(translationText);
  };

  // Trigger content generation when any setting changes
  useEffect(() => {
    generateDraftContent();
  }, [channel, studentName, parentName, tone, language, reason, anecdotes]);

  const handleCompile = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      generateDraftContent();
    }, 1200);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(draftEnglish + (language !== 'none' ? '\n\n---\n\n' + draftTranslation : ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-edulift-canvas">
      {/* Top Header */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <Link to="/dashboard" className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition" title="Back">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold text-slate-900 font-sans">Parent Communication Assistant</h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-50 text-edulift-teal border border-teal-100">
            Teacher Plan Premium Outreaches
          </span>
        </div>
      </header>

      {/* Two-Pane Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Form Pane */}
        <section className="w-96 bg-white border-r border-slate-200 p-6 flex-shrink-0 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Draft Parameters</h2>
              <Globe className="w-4 h-4 text-edulift-teal animate-pulse" />
            </div>

            {/* Communication Channel */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase">Communication Channel</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setChannel('email')}
                  className={`p-2.5 rounded-xl border text-xs text-center font-bold transition flex items-center justify-center gap-1.5 ${
                    channel === 'email' 
                      ? 'border-edulift-teal bg-teal-50/50 text-edulift-teal font-extrabold' 
                      : 'border-slate-200 hover:border-teal-400 text-slate-600'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Message
                </button>
                <button 
                  onClick={() => setChannel('sms')}
                  className={`p-2.5 rounded-xl border text-xs text-center font-bold transition flex items-center justify-center gap-1.5 ${
                    channel === 'sms' 
                      ? 'border-edulift-teal bg-teal-50/50 text-edulift-teal font-extrabold' 
                      : 'border-slate-200 hover:border-teal-400 text-slate-600'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Mobile SMS
                </button>
              </div>
            </div>

            {/* Student & Parent Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase">Student Name</label>
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="block w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-edulift-teal" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase">Parent Salutation</label>
                <input 
                  type="text" 
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="block w-full px-3 py-2 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-edulift-teal" 
                />
              </div>
            </div>

            {/* Communication Reason / Template */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase">Outreach Purpose</label>
              <select 
                value={reason}
                onChange={(e) => setReason(e.target.value as ReasonType)}
                className="block w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-edulift-teal bg-white"
              >
                <option value="behavior">Behavioral Update (Kindness, Cooperation)</option>
                <option value="academic">Academic Performance Progress</option>
                <option value="missing_work">Missing Homework Assignment alert</option>
              </select>
            </div>

            {/* 5-Tone Hub Grid */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase">Select Hub Tone Profile (5-Tone Model)</label>
              <div className="grid grid-cols-1 gap-2">
                {toneOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = tone === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setTone(opt.id)}
                      className={`flex items-center text-left p-3 rounded-xl border transition ${
                        isSelected 
                          ? `${opt.color} border-2 font-bold shadow-sm` 
                          : 'border-slate-100 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">{opt.name}</p>
                        <p className="text-[10px] text-slate-500 line-clamp-1">{opt.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Translation Settings */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-slate-400" />
                Secondary Language Translation
              </label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as LanguageType)}
                className="block w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-edulift-teal bg-white"
              >
                <option value="none">None (English Only)</option>
                <option value="spanish">Spanish (Español)</option>
                <option value="vietnamese">Vietnamese (Tiếng Việt)</option>
                <option value="arabic">Arabic (العربية)</option>
              </select>
            </div>

            {/* Custom Anecdotes */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase">Anecdotes / Core Teacher Notes</label>
              <textarea 
                rows={4}
                value={anecdotes}
                onChange={(e) => setAnecdotes(e.target.value)}
                className="block w-full p-3 text-sm rounded-xl border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-edulift-teal transition font-sans"
              />
            </div>
          </div>

          {/* Trigger compilation */}
          <div className="pt-6 border-t border-slate-100 mt-6">
            <button 
              onClick={handleCompile}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl text-white bg-edulift-teal hover:bg-teal-700 active:scale-95 transition font-semibold shadow-md shadow-teal-600/15"
            >
              <span>Recompile Outreach Message</span>
            </button>
          </div>
        </section>

        {/* Right Output Pane */}
        <section className="flex-1 bg-slate-100 p-6 overflow-hidden flex flex-col justify-between relative">
          {/* Live Loading Overlay */}
          {isGenerating && (
            <div className="absolute inset-0 bg-slate-100/90 flex flex-col items-center justify-center space-y-4 z-40">
              <div className="w-12 h-12 rounded-full border-4 border-teal-200 border-t-edulift-teal animate-spin"></div>
              <p className="font-bold text-sm text-slate-800">EduLift AI is drafting parent message variants...</p>
            </div>
          )}

          {/* Email / SMS Window Client Wrapper */}
          <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col overflow-hidden max-w-3xl w-full mx-auto">
            {/* Client Header */}
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {channel === 'email' ? 'Active Email Client Preview' : 'Active Smartphone SMS Preview'}
              </p>
              <button 
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 text-xs font-bold transition flex items-center space-x-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy Message'}</span>
              </button>
            </div>

            {/* Email Info block (To, From, Subject) */}
            {channel === 'email' && (
              <div className="px-6 py-3 border-b border-slate-100 text-sm space-y-1.5 flex-shrink-0 bg-slate-50/50">
                <p className="text-slate-400"><strong className="text-slate-700 font-semibold">To:</strong> <span>{parentName} (parent@schoolstatus.org)</span></p>
                <p className="text-slate-400"><strong className="text-slate-700 font-semibold">From:</strong> sarah.jenkins@lincoln-elementary.edu</p>
                <p className="text-slate-400"><strong className="text-slate-700 font-semibold">Subject:</strong> <span className="text-slate-800 font-bold">{subject}</span></p>
              </div>
            )}

            {/* Content Container */}
            <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
              {/* Primary English Draft */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-edulift-teal uppercase tracking-wider">English Draft</p>
                <div className="text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-wrap bg-slate-50/30 p-4 rounded-xl border border-slate-100">
                  {draftEnglish}
                </div>
              </div>

              {/* Translation Variant Section */}
              {language !== 'none' && (
                <div className="border-t border-slate-200 pt-6 space-y-3">
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    {language === 'spanish' && 'Spanish (Español) Translation'}
                    {language === 'vietnamese' && 'Vietnamese (Tiếng Việt) Translation'}
                    {language === 'arabic' && 'Arabic (العربية) Translation'}
                  </p>
                  <div className="text-sm text-slate-700 leading-relaxed font-sans whitespace-pre-wrap italic bg-amber-50/20 p-4 rounded-xl border border-amber-100/50">
                    {draftTranslation}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom tips */}
          <div className="mt-4 text-center text-xs text-slate-400">
            Pro Tip: Translations are culturally optimized. Click the "Copy Message" action above to instantly paste into ClassDojo or SMS clients!
          </div>
        </section>
      </div>
    </div>
  );
};

export default ParentCommunicationAssistant;
