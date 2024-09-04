const dialogues = [
    { role: 'Kundenberater', name: 'Melanie Müller', phrase: 'Wie kann ich Ihnen weiterhelfen?', action: null },
    { role: 'Kunde', name: 'Max Mustermann', phrase: 'Ich soll einen Pflegeantrag stellen.', action: 'showPopup' },
    { role: 'Kundenberater', name: 'Melanie Müller', phrase: 'Haben Sie bereits einen Pflegegrad?', action: null },
    { role: 'Kunde', name: 'Max Mustermann', phrase: 'Nein, den habe ich noch nicht.', action: 'tickErstantrag' },
    { role: 'Kundenberater', name: 'Melanie Müller', phrase: 'Ihre Versicherungsdaten sind noch korrekt, oder?', action: null },
    { role: 'Kunde', name: 'Max Mustermann', phrase: 'Ja, genau, da hat sich nichts geändert.', action: null },
    { role: 'Kundenberater', name: 'Melanie Müller', phrase: 'Haben Sie einen Bevollmächtigten oder Betreuer?', action: null },
    { role: 'Kunde', name: 'Max Mustermann', phrase: 'Ja, mein Sohn Matthias. Der sollte im System hinterlegt sein.', action: 'fillBevollmächtigter' },
    { role: 'Kundenberater', name: 'Melanie Müller', phrase: 'Ab Pflegegrad 2 haben Sie Anspruch auf Pflegegeld oder Pflegesachleistungen. Benötigen Sie die Hilfe eines Pflegedienstes?', action: null },
    { role: 'Kunde', name: 'Max Mustermann', phrase: 'Nein, ich bekomme alles noch selbstständig hin.', action: 'tickPflegegeld' },
    { role: 'Kundenberater', name: 'Melanie Müller', phrase: 'Ist Ihre Bankverbindung noch aktuell?', action: null },
    { role: 'Kunde', name: 'Max Mustermann', phrase: 'Ja, die Bankverbindung hat sich nicht geändert.', action: null },
    { role: 'Kundenberater', name: 'Melanie Müller', phrase: 'Der Antrag ist vollständig und wird an den Medizinischen Dienst übergeben.', action: 'submitAntrag' },
  ];
  
  export default dialogues;
  