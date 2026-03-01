// recipe-filter.js
(function () {
  // Find the section that contains the recipe cards
  const recipesSection = document.querySelector('section.links');
  if (!recipesSection) {
    console.warn('Recipe filter: no <section class="links"> found.');
    return;
  }

  // Build the filter UI
  const filterWrap = document.createElement('div');
  filterWrap.className = 'recipe-filter-wrap';
  filterWrap.style.display = 'flex';
  filterWrap.style.flexWrap = 'wrap';
  filterWrap.style.alignItems = 'center';
  filterWrap.style.gap = '0.5rem';
  filterWrap.style.margin = '0 0 1rem';

  const label = document.createElement('label');
  label.htmlFor = 'recipe-filter';
  label.textContent = 'Search recipes:';
  label.style.fontWeight = '600';

  const input = document.createElement('input');
  input.type = 'search';
  input.id = 'recipe-filter';
  input.placeholder = 'Search recipe title or description…';
  input.setAttribute('aria-label', 'Filter recipes');
  input.style.padding = '0.45rem 0.6rem';
  input.style.minWidth = '220px';
  input.style.border = '1px solid #d1d5db';
  input.style.borderRadius = '6px';

  const clearBtn = document.createElement('button');
  clearBtn.type = 'button';
  clearBtn.textContent = 'Clear';
  clearBtn.style.padding = '0.4rem 0.6rem';
  clearBtn.style.border = '1px solid #e2e8f0';
  clearBtn.style.borderRadius = '6px';
  clearBtn.addEventListener('click', () => {
    input.value = '';
    input.dispatchEvent(new Event('input'));
    input.focus();
  });

  filterWrap.appendChild(label);
  filterWrap.appendChild(input);
  filterWrap.appendChild(clearBtn);

  // Insert UI at the top of the recipesSection
  recipesSection.insertBefore(filterWrap, recipesSection.firstChild);

  // Create "no results" message (below the cards)
  const noResults = document.createElement('div');
  noResults.className = 'no-results';
  noResults.textContent = 'No recipes match your search.';
  noResults.style.display = 'none';
  noResults.style.marginTop = '1rem';
  noResults.style.color = '#475569';
  recipesSection.appendChild(noResults);

  // Helper: only get .card elements inside this recipesSection
  function getCards() {
    return Array.from(recipesSection.querySelectorAll('.card'));
  }

  // Filter logic (title + description)
  function filterCards(query) {
    const q = (query || '').trim().toLowerCase();
    const cards = getCards();
    let visibleCount = 0;

    cards.forEach((card) => {
      const titleEl = card.querySelector('h3');
      const descEl = card.querySelector('p');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const desc = descEl ? descEl.textContent.toLowerCase() : '';

      const matches = q === '' || title.includes(q) || desc.includes(q);

      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? '' : 'none';
  }

  // Debounce helper
  function debounce(fn, wait = 150) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  input.addEventListener('input', debounce((e) => {
    filterCards(e.target.value);
  }, 100));

  // Esc clears the filter
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      input.value = '';
      filterCards('');
      input.blur();
    }
  });

  // Initial run (show all)
  filterCards('');
})();