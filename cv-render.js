(() => {
    const root = document.getElementById("cv-profile");
    const source = document.getElementById("cv-data");
    if (!root || !source) {
        return;
    }

    const language = root.dataset.language || "en";
    const text = {
        en: {
            personal_info: "Curriculum vitae",
            formal_education: "Formal education",
            non_formal_education: "Additional education",
            research_interests: "Research interests",
            languages: "Languages",
            experience: "Experience",
            skills: "Skills",
            achievements: "Awards & recognition",
            publications: "Publications",
            full_name: "Name",
            document_type: "Document",
            photo: "Photo to be added",
            photo_file: "Add your image as images/cv-profile.jpg",
            source_note: "CV details are shown in the original Russian wording.",
            raw_json: "View source JSON",
            year: "Year",
            period: "Period",
            level: "Level",
            specialty_code: "Specialty code",
            specialty_name: "Specialty",
            institution: "Institution",
            country: "Country",
            programs: "Programs",
            materials_science: "Materials science",
            international_relations: "International relations",
            public_policy: "Public policy",
            languages: "Languages",
            public_organizations: "Public organizations",
            conferences_and_forums: "Conferences & forums",
            professional_relevant: "Research experience",
            professional_non_relevant: "Other professional experience",
            social_projects: "Social projects",
            soft_skills: "Professional strengths",
            hard_skills: "Technical skills",
            software: "Software",
            laboratory: "Laboratory equipment",
            awards: "Awards",
            title: "Title",
            author: "Author",
            authors: "Authors",
            type: "Type",
            details: "Details",
            journal: "Journal",
            doi: "DOI",
            url: "Link",
            role: "Role",
            organization: "Organization",
            projects: "Projects",
            roles: "Participation",
            speaker: "Speaker",
            delegate: "Delegate"
        },
        id: {
            personal_info: "Curriculum vitae",
            formal_education: "Pendidikan formal",
            non_formal_education: "Pendidikan tambahan",
            research_interests: "Minat penelitian",
            languages: "Bahasa",
            experience: "Pengalaman",
            skills: "Keahlian",
            achievements: "Penghargaan & pengakuan",
            publications: "Publikasi",
            full_name: "Nama",
            document_type: "Dokumen",
            photo: "Foto akan ditambahkan",
            photo_file: "Tambahkan foto Anda sebagai images/cv-profile.jpg",
            source_note: "Rincian CV ditampilkan dalam bahasa Rusia sesuai sumber aslinya.",
            raw_json: "Lihat JSON sumber",
            year: "Tahun",
            period: "Periode",
            level: "Jenjang",
            specialty_code: "Kode bidang",
            specialty_name: "Bidang",
            institution: "Institusi",
            country: "Negara",
            programs: "Program",
            materials_science: "Ilmu material",
            international_relations: "Hubungan internasional",
            public_policy: "Kebijakan publik",
            public_organizations: "Organisasi publik",
            conferences_and_forums: "Konferensi & forum",
            professional_relevant: "Pengalaman penelitian",
            professional_non_relevant: "Pengalaman profesional lainnya",
            social_projects: "Proyek sosial",
            soft_skills: "Keahlian profesional",
            hard_skills: "Keahlian teknis",
            software: "Perangkat lunak",
            laboratory: "Peralatan laboratorium",
            awards: "Penghargaan",
            title: "Judul",
            author: "Penulis",
            authors: "Para penulis",
            type: "Jenis",
            details: "Rincian",
            journal: "Jurnal",
            doi: "DOI",
            url: "Tautan",
            role: "Peran",
            organization: "Organisasi",
            projects: "Proyek",
            roles: "Partisipasi",
            speaker: "Pembicara",
            delegate: "Delegasi"
        },
        ru: {
            personal_info: "Резюме",
            formal_education: "Формальное образование",
            non_formal_education: "Дополнительное образование",
            research_interests: "Научные интересы",
            languages: "Языки",
            experience: "Опыт",
            skills: "Навыки",
            achievements: "Награды и признание",
            publications: "Публикации",
            full_name: "Имя",
            document_type: "Документ",
            photo: "Здесь будет фотография",
            photo_file: "Добавьте фото в файл images/cv-profile.jpg",
            source_note: "Сведения представлены на русском языке, как в исходном резюме.",
            raw_json: "Показать исходный JSON",
            year: "Год",
            period: "Период",
            level: "Уровень",
            specialty_code: "Код специальности",
            specialty_name: "Специальность",
            institution: "Учебное заведение",
            country: "Страна",
            programs: "Программы",
            materials_science: "Материаловедение",
            international_relations: "Международные отношения",
            public_policy: "Государственная политика",
            public_organizations: "Общественная деятельность",
            conferences_and_forums: "Конференции и форумы",
            professional_relevant: "Опыт в научной сфере",
            professional_non_relevant: "Другой профессиональный опыт",
            social_projects: "Социальные проекты",
            soft_skills: "Профессиональные навыки",
            hard_skills: "Технические навыки",
            software: "Программное обеспечение",
            laboratory: "Лабораторное оборудование",
            awards: "Награды",
            title: "Название",
            author: "Автор",
            authors: "Авторы",
            type: "Тип",
            details: "Описание",
            journal: "Журнал",
            doi: "DOI",
            url: "Ссылка",
            role: "Роль",
            organization: "Организация",
            projects: "Проекты",
            roles: "Участие",
            speaker: "Докладчик",
            delegate: "Делегат"
        }
    };
    const labels = text[language] || text.en;

    const element = (tag, className, content) => {
        const node = document.createElement(tag);
        if (className) {
            node.className = className;
        }
        if (content !== undefined) {
            node.textContent = content;
        }
        return node;
    };

    const labelFor = key => labels[key] || key.replaceAll("_", " ");

    const appendValue = (parent, key, value) => {
        if (Array.isArray(value)) {
            const group = element("div", "cv-group");
            group.append(element("h3", "", labelFor(key)));

            if (value.every(item => typeof item !== "object" || item === null)) {
                const list = element("ul");
                for (const item of value) {
                    list.append(element("li", "", String(item)));
                }
                group.append(list);
            } else {
                const records = element("div", "cv-record-list");
                for (const item of value) {
                    records.append(renderRecord(item));
                }
                group.append(records);
            }
            parent.append(group);
            return;
        }

        if (value !== null && typeof value === "object") {
            const group = element("div", "cv-group");
            group.append(element("h3", "", labelFor(key)));
            const facts = element("div", "cv-facts");
            for (const [childKey, childValue] of Object.entries(value)) {
                appendValue(facts, childKey, childValue);
            }
            group.append(facts);
            parent.append(group);
            return;
        }

        const fact = element("p", "cv-fact");
        fact.append(element("strong", "", `${labelFor(key)}: `));
        if ((key === "url" || key === "doi") && typeof value === "string" && /^https?:\/\//i.test(value)) {
            const link = element("a", "", value);
            link.href = value;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            fact.append(link);
        } else {
            fact.append(document.createTextNode(String(value)));
        }
        parent.append(fact);
    };

    const renderRecord = record => {
        const card = element("article", "cv-record");
        if (!record || typeof record !== "object" || Array.isArray(record)) {
            card.textContent = String(record);
            return card;
        }

        const metadata = ["year", "period"].filter(key => record[key] !== undefined);
        if (metadata.length) {
            card.append(element("p", "cv-record-meta", metadata.map(key => `${labelFor(key)}: ${record[key]}`).join(" · ")));
        }
        for (const [key, value] of Object.entries(record)) {
            if (!metadata.includes(key)) {
                appendValue(card, key, value);
            }
        }
        return card;
    };

    let data;
    try {
        data = JSON.parse(source.textContent);
    } catch (error) {
        console.error("Could not parse the CV data embedded in this page.", error);
        root.textContent = "The CV information could not be displayed.";
        return;
    }

    const profile = element("section", "cv-full-profile");
    const header = element("div", "cv-profile-header");
    const photo = element("div", "cv-photo-placeholder");
    photo.setAttribute("role", "img");
    photo.setAttribute("aria-label", labels.photo);
    photo.append(element("span", "", labels.photo));
    photo.append(element("small", "", labels.photo_file));
    header.append(photo);

    const identity = element("div", "cv-profile-heading");
    identity.append(element("p", "eyebrow", labelFor("personal_info")));
    const personalInfo = data.personal_info || {};
    identity.append(element("h2", "", personalInfo.full_name || ""));
    if (personalInfo.document_type) {
        identity.append(element("p", "", `${labelFor("document_type")}: ${personalInfo.document_type}`));
    }
    header.append(identity);
    profile.append(header);
    profile.append(element("p", "cv-source-note", labels.source_note));

    const sections = element("div", "cv-json-sections");
    for (const [key, value] of Object.entries(data)) {
        if (key === "personal_info") {
            continue;
        }
        const section = element("section", "cv-json-section");
        section.setAttribute("aria-labelledby", `cv-${key}`);
        section.append(element("h2", "", labelFor(key)));
        section.querySelector("h2").id = `cv-${key}`;
        if (Array.isArray(value)) {
            if (value.every(item => typeof item !== "object" || item === null)) {
                const list = element("ul");
                for (const item of value) {
                    list.append(element("li", "", String(item)));
                }
                section.append(list);
            } else {
                const records = element("div", "cv-record-list");
                for (const item of value) {
                    records.append(renderRecord(item));
                }
                section.append(records);
            }
        } else if (value !== null && typeof value === "object") {
            for (const [childKey, childValue] of Object.entries(value)) {
                appendValue(section, childKey, childValue);
            }
        } else {
            appendValue(section, key, value);
        }
        sections.append(section);
    }
    profile.append(sections);

    const raw = element("details", "cv-json-source");
    raw.append(element("summary", "", labels.raw_json));
    const formatted = element("pre");
    formatted.textContent = JSON.stringify(data, null, 2);
    raw.append(formatted);
    profile.append(raw);
    root.replaceWith(profile);
})();
