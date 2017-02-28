(function (FMS, _) {
    _.extend( FMS, {
        validationStrings: {
            update: 'Molimo ukucajte poruku',
            title: 'Molimo upišite naslov',
            detail: 'Molimo upišite neke detalje',
            name: {
                required: 'Molimo unesite Vaše ime',
                validName: 'Molimo upišite Vaše puno ime i prezime, opštinama je ova informacija potrebna; ukoliko ne želite da Vaše ime bude prikazano na sajtu, odštiklirajte polje ispod.'
            },
            category: 'Molimo izaberite kategoriju',
            rznvy: {
                required: 'Molimo upišite Vaš email',
                email: 'Molimo upišite ispravnu email adresu'
            },
            email: {
                required: 'Molimo upišite Vaš email',
                email: 'Molimo upišite ispravnu email adresu'
            },
            password: 'Molimo ukucajte lozinku'
        },
        strings: {
            next: 'Sledeće',
            untitled_draft: 'Nenaslovljeni nacrt',
            login_error: 'Došlo je problema sa prijavom. Molimo pokušajte ponovo kasnije.',
            logout_error: 'Došlo je do problema odjavom Molimo pokušajte ponovo kasnije.',
            login_details_error: 'Došlo je do problema prilikom prijavljivanja. Molimo proverite Vašu email adresu i lozinku i da li ste potvrdili Vašu lozinku.',
            password_problem: 'Došlo je do problema sa kombinacijom emaila/lozinke koju koristite. Ukoliko ste svoju lozinku zaboravili ili je nemate možete je podesiti povratkom na email ekran i biranjem opcije za postavljanje lozinke. Lozinke se ne aktiviraju sve dok se ne klikne na link u email-u za potvrde.',
            search_placeholder: 'Traži mesto ili poštanski kod',
            location_error: 'Lokacija greška',
            location_problem: 'Došlo je do problema u pretrazi sa lokacijom koju ste tražili.',
            multiple_locations: 'Pronađeno je više od jedne lokacije sa tim imenom. Izaberite jednu sa liste ispod ili pokušajte da ukucate naziv ulice i naselje, ili poštanski kod.',
            sync_error: 'Prilikom slanja Vaše prijave došlo je do greške:',
            unknown_sync_error: 'Došlo je do problema prilikom prijave problema. Molimo pokušajte kasnije.',
            report_send_error: 'Došlo je do problema prilikom prijave problema. Molimo pokušajte ponovo.',
            missing_location: 'Molimo unesite lokaciju',
            location_check_failed: 'Došlo je do problema tokom provere da li ovu lokaciju pokrivamo. Molimo pokušajte kasnije.',
            category_extra_check_error: 'Došlo je do problema prilikom provere detalja koji su nam potrebni. Molimo pokušajte kasnije.',
            locate_dismissed: 'Molimo tražite ime ulice i naselja, ili poštkanski kod.',
            geolocation_failed: "Žao nam je ali nismo bili u mogućnosti odrediti Vašu lokaciju dovoljno precizno kako bismo je prikazali na mapi. Molimo pokušajte pronaći Vašu lokaciju upotrebom boksa za pretragu. <b> Ukoliko na Vašem telefonu niste omogućili podešavanja za GPS lokaciju molimo da to učinite sada, ponovo pokrenete aplikaciju i pokušate ponovo.</b>",
            geolocation_denied: 'Uslugama lokacije nije moguće pristupiti. Molimo proverite Vaše korisničke dozvole.',
            select_category: '-- Izaberite kategoriju --',
            offline_got_position: 'Lokacija pronađena.',
            offline_failed_position: 'Ne mogu da odredim lokaciju.',
            required: 'neophodno',
            invalid_email: 'Neispravna email adresa',
            invalid_report: 'Neispravna prijava problema',
            photo_failed: 'Došlo je do problema prilikom slikanja.',
            photo_added: 'Slika dodata',
            photo_loading: 'Otpremanje (upload) slika može da potraje, molimo budite strpljivi',
            upload_aborted: 'Došlo je do problema prilikom slanja (uploading) prijavljenog problema.',
            try_again: 'Pokušajte ponovo',
            save_for_later: 'Sačuvaj za kasnije',
            no_connection: 'Ne postoji dostupna veza ka Internetu pa Vašu prijavu nije moguće poslati. Molimo pokušajte kasnije.',
            more_details: 'Više detalja'
        }
    });
})(FMS, _);
