// Function to provide detailed Vastu tips for Home
const getDetailedHomeVastuTips = () => {
   return `
   🏡 *Detailed Vastu Tips for Your Home* 🏡

   1. *Main Entrance*:
      - The main door should face *east* or *north* to welcome positive energy and prosperity. 

      - Avoid placing the entrance in the *southwest* or *southeast* directions as they may lead to financial instability.

      - The door should open inwards, and the area should be well-lit and free of obstacles.

      - Avoid placing shoes or clutter near the entrance as it blocks energy flow.

   2. *Master Bedroom*:
      - The master bedroom should be located in the *southwest* part of the house, which is associated with stability and strength.

      - Avoid placing the bedroom in the *northeast* corner, as this may lead to disturbances and restlessness.

      - The bed should be positioned so that your head points *south* or *east* while sleeping, promoting peace and restful sleep.

   3. *Kitchen*:
      - The ideal location for the kitchen is the *southeast* corner (the "Agni" or fire element zone). 

      - If the southeast is not available, you can also place the kitchen in the *northwest*.

      - Avoid placing the kitchen in the *north* or *northeast* as it may affect health and prosperity.

      - The stove should be placed in such a way that the cook faces *east* while cooking.

   4. *Living Room*:
      - The living room should be located in the *north* or *east* side of the house.

      - Furniture should be placed against the walls in the west or south, leaving the north and east open for energy flow.

      - Keep the living room free of clutter to allow positive energy to circulate.

      - Use light, soothing colors such as *white*, *light yellow*, or *pastel shades* for walls and furniture to create a calming environment.

   5. *Pooja Room*:
      - The *northeast* corner is the most auspicious place for the pooja room. If this is not possible, the east or west can also be used.

      - Ensure that idols or images of deities are not placed directly on the ground; they should be at least a few inches above floor level.

      - The person praying should face *east* or *north* while praying.

      - Avoid placing the pooja room next to the bathroom or under a staircase.

   6. *Bathroom*:
      - The bathroom should ideally be located in the *northwest* part of the house. If that is not possible, the southeast is the next best option.

      - Avoid placing bathrooms in the *northeast* or *southwest* corners, as this can lead to negative energy.

      - Ensure that the bathroom door remains closed when not in use to prevent energy loss.
   
   ✨ These Vastu tips can help create a balanced, harmonious, and prosperous living environment in your home.
   `;
};

// Function to provide detailed Vastu tips for Office
const getDetailedOfficeVastuTips = () => {
   return `
   🏢 *Detailed Vastu Tips for Your Office* 🏢

   1. *Main Entrance*:
      - The entrance should face *east* or *north* to attract success, prosperity, and positive energy into the workspace.

      - The entrance should be clutter-free, well-lit, and decorated with plants or symbols of prosperity, such as a *shree yantra*.

      - Avoid having the main entrance face the *southwest*, as it may lead to challenges in business growth.

   2. *Boss's Cabin*:
      - The boss's cabin should be located in the *southwest* corner of the office, which is considered the area of power and authority.

      - The boss should sit facing *north* or *east* to invite positive energy and leadership.

      - There should be a solid wall behind the boss’s chair for stability and support, and avoid placing the desk under a beam.

   3. *Employees' Seating*:
      - Employees should ideally face *east* or *north* while working to promote productivity and focus.

      - Avoid placing employees facing *south* or *west*, as it may cause lethargy and discomfort.

      - The office should have proper ventilation and sunlight to ensure a flow of positive energy and a healthy working environment.

   4. *Meeting/Conference Room*:
      - The meeting room should be located in the *northwest* part of the office to encourage active discussions and dynamic decision-making.

      - Ensure that the head of the table is positioned in the *north* or *east*, and avoid placing anyone with their back to the door.

      - Use *soft colors* like light blue or pastel shades for the walls to promote a calm and focused atmosphere.

   5. *Finance Department*:
      - The finance or accounts department should be located in the *north* direction, which is associated with wealth and prosperity.

      - Employees working in the finance department should face *north* or *east* for better financial management and growth.

   6. *Pantry/Break Room*:
      - The pantry or break room should be in the *southeast* corner of the office, which is associated with the fire element.

      - Keep this area clean and organized, and use cheerful colors like *yellow* or *orange* to uplift the mood.

   ✨ By following these detailed Vastu tips, you can create a balanced and harmonious office space that supports growth, productivity, and success.
   `;
};

// Function to handle detailed Vastu Consultation based on user input
const handleDetailedVastuConsultation = async (locationType) => {
   let vastuReport = '';

   if (locationType === 'home') {
       vastuReport = getDetailedHomeVastuTips();
   } else if (locationType === 'office') {
       vastuReport = getDetailedOfficeVastuTips();
   } else {
       vastuReport = "Please specify whether you'd like detailed Vastu tips for your 'home' or 'office'.";
   }

   return vastuReport;
};

module.exports = { handleDetailedVastuConsultation };
