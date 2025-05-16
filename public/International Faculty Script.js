document.addEventListener('DOMContentLoaded', function () {
    // Section data
    const sections = {
      visa: {
        title: "Preparing For Uzbekistan",
        icon: "fa-passport",
        links: [
          { title: "Legalization and Recognition of Diplomas", url: "PreparingForUzbekistan/legalization-recognition.html", icon: "fa-file-signature" },
          { title: "Timeline and Checklists", url: "PreparingForUzbekistan/timeline-checklist.html", icon: "fa-tasks" },
          { title: "Arrival Information Form", url: "PreparingForUzbekistan/arrival-info-form.html", icon: "fa-clipboard-list" },
          { title: "Visa Information", url: "PreparingForUzbekistan/visa-info.html", icon: "fa-stamp" },
          { title: "Relocation", url: "PreparingForUzbekistan/relocation.html", icon: "fa-truck-moving" },
          { title: "Driver's License", url: "PreparingForUzbekistan/driver-license.html", icon: "fa-id-card" }
        ]
      },
      arrival: {
        title: "Upon Arrival",
        icon: "fa-plane-arrival",
        links: [
          { title: "Tashkent Transportation", url: "UponArrival/tashkent-transport.html", icon: "fa-bus" },
          { title: "Registration and Accommodation", url: "UponArrival/migration-card.html", icon: "fa-hotel" },
          { title: "Uzbek SIM Cards", url: "UponArrival/sim-cards.html", icon: "fa-sim-card" },
          { title: "Clothes for Uzbekistan", url: "UponArrival/clothes.html", icon: "fa-tshirt" },
          { title: "Useful Links & Applications", url: "UponArrival/useful-links.html", icon: "fa-link" },
          { title: "Orientation Events", url: "UponArrival/orientation.html", icon: "fa-calendar-alt" }
        ]
      },
      start: {
        title: "Getting Started",
        icon: "fa-running",
        links: [
          { title: "First day Procedures", url: "gettingstarted/procedures.html", icon: "fa-clipboard-check" },
          { title: "Onboarding", url: "gettingstarted/Onboarding.pdf", icon: "fa-user-plus" },
          { title: "Bank Account", url: "gettingstarted/bank-account.html", icon: "fa-university" },
          { title: "Debit Cards", url: "gettingstarted/Debit Cards.html", icon: "fa-credit-card" },
          { title: "Corporate Email and Personal Pages", url: "gettingstarted/CorporateEmail and PersonalPages.html", icon: "fa-envelope" },
          { title: "Useful Contacts", url: "gettingstarted/Useful Contacts.html", icon: "fa-address-book" }
        ]
      },
      work: {
        title: "Work",
        icon: "fa-briefcase",
        links: [
          { title: "Teaching and Research", url: "Work/Teaching and Research.html", icon: "fa-chalkboard-teacher" },
          { title: "Research Fund", url: "Work/Research Fund.html", icon: "fa-money-bill-wave" },
          { title: "Business Trips", url: "Work/Business Trips.html", icon: "fa-plane" },
          { title: "Work Calendar and Leave", url: "Work/Work Calendar and Leave.html", icon: "fa-calendar-day" },
          { title: "Research Productivity Assessment", url: "Work/Research Productivity Assessment.html", icon: "fa-chart-line" },
          { title: "Resignation", url: "Work/Resignation.html", icon: "fa-sign-out-alt" }
        ]
      },
      family: {
        title: "Family Matters",
        icon: "fa-home",
        links: [
          { title: "Visa Assistance", url: "FamilyMatters/Visa.html", icon: "fa-passport" },
          { title: "Opportunities for Jobs and Studies", url: "FamilyMatters/Opportunities.html", icon: "fa-briefcase" },
          { title: "Health Insurance for Family Members", url: "FamilyMatters/InsuranceForFamily.html", icon: "fa-heartbeat" },
          { title: "Leisure Time", url: "FamilyMatters/Leisure Time.html", icon: "fa-umbrella-beach" },
          { title: "Daycare for Pre-Schoolers", url: "FamilyMatters/Daycare for Preschoolers.html", icon: "fa-baby" },
          { title: "Education in Uzbekistan", url: "FamilyMatters/Education System.html", icon: "fa-school" }
        ]
      },
      community: {
        title: "Community Life",
        icon: "fa-users",
        links: [
          { title: "Community life at NUU", url: "CommunityLife/nuucommunity.html", icon: "fa-users" },
          { title: "University Facilities", url: "CommunityLife/facilities.html", icon: "fa-building" },
          { title: "Publications of NUU", url: "CommunityLife/clubs.html", icon: "fa-newspaper" },
          { title: "Uzbek Language Courses", url: "CommunityLife/Lcourses.html", icon: "fa-language" },
          { title: "Sports", url: "CommunityLife/sports.html", icon: "fa-running" },
          { title: "Life in Tashkent", url: "CommunityLife/lifeinTashkent.html", icon: "fa-city" }
        ]
      },
      safety: {
        title: "Safety",
        icon: "fa-shield-alt",
        links: [
          { title: "Anti-fraud Information", url: "Safety/Anti-fraud_information.html", icon: "fa-user-shield" },
          { title: "Emergency & Medical Assistance", url: "Safety/Emergency_medical_assistance.html", icon: "fa-ambulance" },
          { title: "Health Insurance", url: "Safety/Health_insurance.html", icon: "fa-file-medical" },
          { title: "Safety Tips", url: "Safety/Safety_tips.html", icon: "fa-exclamation-triangle" },
          { title: "Sick Leave", url: "Safety/Sick_leave.html", icon: "fa-procedures" },
          { title: "Unexpected Situations", url: "Safety/Unexpected_situations.html", icon: "fa-question-circle" }
        ]
      },
      health: {
        title: "Health & Wellness",
        icon: "fa-heartbeat",
        links: [
          { title: "Loyalty Programmes", url: "Benefits&well-being/Loyalty_programmes.html", icon: "fa-award" },
          { title: "Psychological Care", url: "Benefits&well-being/Psychological_care.html", icon: "fa-brain" },
          { title: "Tax Deduction for HQS", url: "Benefits&well-being/Tax_deduction_for_HQS&Tax_free.html", icon: "fa-file-invoice-dollar" },
          { title: "Uzbek Citizenship", url: "Benefits&well-being/Uzbek_citizenship.html", icon: "fa-flag" },
          { title: "Well-being Guide", url: "Benefits&well-being/Well-being_guide.html", icon: "fa-spa" }
        ]
      }
    };
  
    // Help toggle
    const helpToggle = document.getElementById('helpToggle');
    const helpOptions = document.getElementById('helpOptions');
    if (helpToggle && helpOptions) {
      helpToggle.addEventListener('click', () => {
        helpOptions.style.display = helpOptions.style.display === 'flex' ? 'none' : 'flex';
      });
    }
  
    // Section grid functionality
    const sectionsGrid = document.getElementById('sectionsGrid');
    const sectionDetails = document.getElementById('sectionDetails');
    const detailTitle = document.getElementById('detailTitle');
    const detailContent = document.getElementById('detailContent');
    const closeDetails = document.getElementById('closeDetails');
  
    sectionsGrid.addEventListener('click', function (e) {
      const sectionCard = e.target.closest('.section-card');
      if (!sectionCard) return;
  
      const sectionId = sectionCard.getAttribute('data-section');
  
      document.querySelectorAll('.section-card').forEach(card => card.classList.remove('active'));
      sectionCard.classList.add('active');
  
      showSectionDetails(sectionId);
    });
  
    function showSectionDetails(section) {
      const sectionData = sections[section];
      detailTitle.innerHTML = `<i class="fas ${sectionData.icon}"></i> ${sectionData.title}`;
  
      detailContent.innerHTML = sectionData.links.map(link => `
        <a href="${link.url}" class="detail-card">
          <div class="card-icon"><i class="fas ${link.icon}"></i></div>
          <div class="title">${link.title}</div>
          <div class="see-more">See more <i class="fas fa-arrow-right"></i></div>
        </a>
      `).join('');
  
      sectionDetails.style.display = 'block';
      sectionDetails.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    closeDetails.addEventListener('click', () => {
      sectionDetails.style.display = 'none';
      document.querySelectorAll('.section-card').forEach(card => card.classList.remove('active'));
    });
  
    document.addEventListener('click', function (e) {
      if (!sectionDetails.contains(e.target) && !e.target.closest('.section-card')) {
        sectionDetails.style.display = 'none';
        document.querySelectorAll('.section-card').forEach(card => card.classList.remove('active'));
      }
    });
  
    function animateValue(el, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        el.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  
    const counters = document.querySelectorAll(".stat-number");
    let statsAnimated = false;
  
    const observer = new IntersectionObserver((entries) => {
      if (!statsAnimated) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.forEach(counter => {
              const target = +counter.getAttribute('data-count');
              animateValue(counter, 0, target, 1500);
            });
            statsAnimated = true;
          }
        });
      }
    }, { threshold: 0.3 });
  
    counters.forEach(counter => observer.observe(counter));
  
    // Fade up elements
    const fadeElements = document.querySelectorAll('.fade-up');
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    fadeElements.forEach(el => fadeObserver.observe(el));
  
    // === Feedback Widget Logic ===
    const feedbackLink = document.querySelector('.help-option[href="#feedback"]');
    const feedbackBox = document.getElementById('feedbackBox');
    const feedbackClose = document.getElementById('feedbackClose');
    const feedbackForm = document.getElementById('feedbackForm');
  
    if (feedbackLink && feedbackBox && feedbackForm && feedbackClose) {
      feedbackLink.addEventListener('click', (e) => {
        e.preventDefault();
        feedbackBox.classList.toggle('hidden');
      });
  
      feedbackClose.addEventListener('click', () => {
        feedbackBox.classList.add('hidden');
      });
  
      feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('✅ Thank you for your feedback!');
        feedbackForm.reset();
        feedbackBox.classList.add('hidden');
      });
    }
  });
  