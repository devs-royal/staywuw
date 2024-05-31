export const orderData = (newData, orderType) => {
    if (!newData || !newData.activities || !Array.isArray(newData.activities)) {
      return newData;
    }
  
    const { activities } = newData;
  
    if (orderType === 1) {
      return {
        ...newData,
        activities: activities.sort((a, b) => b.star_rating - a.star_rating),
      };
    } else if (orderType === 2) {
      return {
        ...newData,
        activities: activities.sort((a, b) => b.price - a.price),
      };
    } else if (orderType === 3) {
      return {
        ...newData,
        activities: activities.sort((a, b) => a.price - b.price),
      };
    } else if (orderType === 4) {
      return {
        ...newData,
        activities: activities.sort(
          (a, b) => b.durationOrdering - a.durationOrdering
        ),
      };
    } else if (orderType === 5) {
      return {
        ...newData,
        activities: activities.sort(
          (a, b) => a.durationOrdering - b.durationOrdering
        ),
      };
    } else {
      return newData;
    }
  };
  