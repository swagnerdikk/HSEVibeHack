import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

const iconPerson = (
  <svg className="profile-page-nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const iconDirection = (
  <svg className="profile-page-nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
  </svg>
);
const iconTech = (
  <svg className="profile-page-nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);
const iconSettings = (
  <svg className="profile-page-nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);
const iconExperience = (
  <svg className="profile-page-nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);

const menuItems = [
  { id: 'main', label: 'Личные данные', icon: iconPerson },
  { id: 'direction_tech', label: 'Направление и технологии', icon: iconDirection },
  { id: 'experience', label: 'Опыт', icon: iconExperience },
  { id: 'settings', label: 'Настройки', icon: iconSettings },
];

export default function ProfilePage() {
  const [activeId, setActiveId] = useState('main');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    direction: '',
    experience: '',
    technologies: '',
  });
  const experienceTextareaRef = useRef(null);
  const techTextareaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const adjustTextareaHeight = (ref) => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    if (activeId === 'experience') adjustTextareaHeight(experienceTextareaRef);
    if (activeId === 'direction_tech') adjustTextareaHeight(techTextareaRef);
  }, [activeId, form.experience, form.technologies]);

  return (
    <div className="profile-page">
      <header className="profile-page-top">
        <Link to="/" className="profile-page-logo-link">
          <h1 className="profile-page-logo">hack<strong>Search</strong></h1>
        </Link>
      </header>
      <main className="profile-page-main">
        <aside className="profile-page-sidebar">
          <ul className="profile-page-nav">
            {menuItems.map((item) => (
              <li key={item.id} className="profile-page-nav-item">
                <button
                  type="button"
                  className={`profile-page-nav-btn ${activeId === item.id ? 'profile-page-nav-btn--active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  <span className="profile-page-nav-icon-wrap">{item.icon}</span>
                  <span className="profile-page-nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <section className="profile-page-content">
          <h2 className="profile-page-content-title">
            {menuItems.find((i) => i.id === activeId)?.label || 'Профиль'}
          </h2>
          <div className="profile-page-content-body">
            {activeId === 'main' && (
              <div className="profile-form">
                <div className="profile-field-row">
                  <label className="profile-field">
                    <span className="profile-field-label">Имя</span>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      className="profile-input"
                      placeholder="Введите имя"
                    />
                  </label>
                  <label className="profile-field">
                    <span className="profile-field-label">Фамилия</span>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      className="profile-input"
                      placeholder="Введите фамилию"
                    />
                  </label>
                </div>
              </div>
            )}
            {activeId === 'direction_tech' && (
              <div className="profile-form">
                <label className="profile-field">
                  <span className="profile-field-label">Направление</span>
                  <input
                    type="text"
                    name="direction"
                    value={form.direction}
                    onChange={handleChange}
                    className="profile-input"
                    placeholder="Например: фронтенд, бэкенд, ML, дизайн"
                  />
                </label>
                <label className="profile-field">
                  <span className="profile-field-label">Технологии</span>
                  <textarea
                    ref={techTextareaRef}
                    name="technologies"
                    value={form.technologies}
                    onChange={handleChange}
                    className="profile-textarea profile-textarea--auto"
                    placeholder="Например: React, Python, Figma — через запятую или с новой строки"
                    rows={1}
                  />
                </label>
              </div>
            )}
            {activeId === 'experience' && (
              <div className="profile-form">
                <label className="profile-field">
                  <span className="profile-field-label">Опыт работы и проекты</span>
                  <textarea
                    ref={experienceTextareaRef}
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="profile-textarea profile-textarea--auto"
                    placeholder="Опишите опыт: компании, проекты, стажировки, хакатоны"
                    rows={1}
                  />
                </label>
              </div>
            )}
            {activeId === 'settings' && (
              <div className="profile-form profile-form--settings">
                <p className="profile-settings-intro">Здесь можно настроить уведомления и отображение.</p>
                <label className="profile-field profile-field--checkbox">
                  <input type="checkbox" className="profile-checkbox" defaultChecked />
                  <span className="profile-checkbox-box" aria-hidden>
                    <svg className="profile-checkbox-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span className="profile-field-label">Уведомления о новых хакатонах</span>
                </label>
                <label className="profile-field profile-field--checkbox">
                  <input type="checkbox" className="profile-checkbox" defaultChecked />
                  <span className="profile-checkbox-box" aria-hidden>
                    <svg className="profile-checkbox-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span className="profile-field-label">Дайджест раз в неделю</span>
                </label>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
