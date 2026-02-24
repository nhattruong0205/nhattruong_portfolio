import mailIcon from '../../icons/mail.png';
import githubIcon from '../../icons/github.png';
import scholarIcon from '../../icons/scholar.png';
import linkedinIcon from '../../icons/linkedin.png';

function AboutMe() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      url: 'https://www.linkedin.com/in/nhat-truong-70b1b122a/', 
      color: '#0077B5'
    },
    {
      name: 'Mail',
      icon: mailIcon,
      url: 'mailto:Nhat.Truong@Utdallas.edu', 
      color: '#EA4335'
    },
    {
      name: 'GitHub',
      icon: githubIcon,
      url: 'https://github.com/nhattruong0205', 
      color: '#333'
    },
    {
      name: 'Google Scholar',
      icon: scholarIcon,
      url: 'https://scholar.google.com/citations?hl=en&user=gbSn9voAAAAJ&view_op=list_works&gmla=AKzYXQ3cP6uenT0DhZpJs_Rr8t4hiRLrBg1klw4r2IPS6Y_d0l9A05cFbEB5A8I5iyEVUBvSjgnafwDoQ-AHVx4PRqKkSCyHHsBrQg',
    }
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">Nhat Truong</h3>
          <p className="text-sm text-gray-600">Data Scientist • Researcher • Developer</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:text-gray-900"
              title={social.name}
            >
              <img src={social.icon} alt={social.name} width="18" height="18" />
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default AboutMe;
