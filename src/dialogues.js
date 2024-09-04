// dialogues.js

export const dialogues = [
    { role: 'Kundenberater', name: 'Mustermann', phrase: 'Wie kann ich Ihnen weiterhelfen?' },
    { role: 'Kunde', name: 'Müller', phrase: 'Ich soll einen Pflegeantrag stellen.', action: 'showPopup' },
    { role: 'Kundenberater', name: 'Mustermann', phrase: 'Haben Sie bereits einen Pflegegrad?', action: null },
    { role: 'Kunde', name: 'Müller', phrase: 'Nein, den habe ich noch nicht.', action: 'tickErstantrag' },
    { role: 'Kundenberater', name: 'Mustermann', phrase: 'Ihre Versicherungsdaten sind noch korrekt, oder?', action: null },
    { role: 'Kunde', name: 'Müller', phrase: 'Ja, genau, da hat sich nichts geändert.', action: null },
    { role: 'Kundenberater', name: 'Mustermann', phrase: 'Haben Sie einen Bevollmächtigten oder Betreuer?', action: null },
    { role: 'Kunde', name: 'Müller', phrase: 'Ja, mein Sohn Matthias. Der sollte im System hinterlegt sein.', action: 'fillBevollmächtigter' },
    { role: 'Kundenberater', name: 'Mustermann', phrase: 'Ab Pflegegrad 2 haben Sie Anspruch auf Pflegegeld oder Pflegesachleistungen. Benötigen Sie die Hilfe eines Pflegedienstes?', action: null },
    { role: 'Kunde', name: 'Müller', phrase: 'Nein, ich bekomme alles noch selbstständig hin.', action: 'tickPflegegeld' },
    { role: 'Kundenberater', name: 'Mustermann', phrase: 'Ist Ihre Bankverbindung noch aktuell?', action: null },
    { role: 'Kunde', name: 'Müller', phrase: 'Ja, die Bankverbindung hat sich nicht geändert.', action: null },
    { role: 'Kundenberater', name: 'Mustermann', phrase: 'Der Antrag ist vollständig und wird an den Medizinischen Dienst übergeben.', action: 'submitAntrag' },
  ];
  