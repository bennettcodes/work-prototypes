cachedImages.append(`<img class="cached-image" src="images/stills/${currentInitials}/${frame.start[currentId] + l}.jpg">`);
bgScroll.eq(currentId).append(`<img id="${currentInitials}-${frame.start[currentId] + l}" class="${currentInitials}-bg-scroll-item bg-scroll-item" src="images/stills/${currentInitials}/${frame.start[currentId] + l}.jpg">`);