(function (FMS, _) {
    _.extend( FMS, {
        validationStrings: {
            update: 'Lini një mesazh',
            title: 'Shkruani subjektin',
            detail: 'Shkruani disa detaje',
            name: {
                required: 'Emri juaj',
                validName: 'Shkruani emrin tuaj të plotë, komunave ju duhet ky informacion - nëse nuk dëshironi që emri juaj të publikohet ne uebsajt, mos zgjidh opsionin më poshtë'
            },
            category: 'Zgjidh kategorinë',
            rznvy: {
                required: 'Ju lutem shkruani email adresen tuaj',
                email: 'E-mail adresa'
            },
            email: {
                required: 'Ju lutem shkruani E-mail adresen tuaj',
                email: 'E-mail adresa'
            },
            password: 'Fjalëkalimi'
        },
        strings: {
            next: 'Vazhdo',
            untitled_draft: 'Skicat pa tituj',
            login_error: 'Kishte një problem gjatë kyçjes tuaj në llogari. Ju lutem provoni më vonë.',
            logout_error: 'Kishte një problem gjatë çkyçjes tuaj nga llogaria. Ju lutem provoni më vonë.',
            login_details_error: 'Kishte një problem gjatë kyçjes në këtë llogari. Ju lutem kontrolloni emailin, fjalëkalimin dhe nëse ju keni konfrimuar fjalëkalimin.',
            password_problem: 'Kishte një problem me kombinimit tuaj të emailit/fjalëkalimit. Nëse keni harruar fjalëkalimin, ose nuk keni një, ju mund të vendosni fjalëkalimin duke u kthyer tek faqja e emailit dhe duke zgjedhur opsionin për vendosjen e fjalëkalimit. Fjalëkalimet nuk aktivizohen deri sa të shtypet lidhja në emailin e konfirmimit.',
            search_placeholder: 'Kërko për një vend',
            location_error: 'Gabim i vendndodhjes',
            location_problem: 'Hasëm në një problem në gjetjen e vendndodhjes tuaj.',
            multiple_locations: 'Më shumë se një vendndodhje i përshtatej atij emri. Zgjidh një më poshtë ose provo të shtypni një emër rruge apo zone.',
            sync_error: 'Është hasur në një gabim gjatë dërgimit të raport tuaj:',
            unknown_sync_error: 'Kishte një problem gjatë dërgimit të raportit tuaj. Ju lutem provoni më vonë.',
            report_send_error: 'Kishte një problem gjatë dërgimit të raportit tuaj. Ju lutem provoni përsëri.',
            missing_location: 'Ju lutem shkruani vendndodhjen',
            location_check_failed: 'Ndodhi një gabim gjatë kontrollimit nëse kemi mbulueshmëri për këtë vendndodhje. Ju lutem provoni më vonë.',
            category_extra_check_error: 'Kishte një gabim gjatë kontrollimit nëse i posedojmë të gjitha detajet e nevojshme për raportim. Ju lutem provoni më vonë.',
            locate_dismissed: 'Ju lutem kërkoni për një emër rruge ose zone.',
            geolocation_failed: "Ne nuk ishim në gjendje për të gjetur vendndodhjen tuaj me saktësi të mjaftueshme që të ju tregojmë hartën. Ju lutem përdorni kutinë e kërkimit për gjetjen e lokacionit tuaj",
            geolocation_denied: 'Nuk u lejua çasja në serviset e vendndodhjes. Ju lutem kontrolloni lejet.',
            select_category: '-- Zgjidh një kategori --',
            offline_got_position: 'Gjej vendndodhjen.',
            offline_failed_position: 'Nuk u gjet vendndodhja.',
            required: 'e nevojshme',
            invalid_email: 'E-mail adresa e pavlefshme',
            invalid_report: 'Raport i pavlefshëm',
            photo_failed: 'Kishte një problem gjatë shkrepjes së fotografisë.',
            photo_added: 'Foto u shtua',
            photo_loading: 'Ngarkimi i fotografive mund të marrë pak kohë, ju lutem keni durim',
            upload_aborted: 'Kishte një problem gjatë ngarkimit të raportit tuaj.',
            try_again: 'Provoni përsëri',
            save_for_later: 'Ruaj për më vonë',
            no_connection: 'Nuk jeni të kyçur në internet për të dërguar raportin. Ju lutem provoni më vonë.',
            more_details: 'Më shumë detaje'
        }
    });
})(FMS, _);
