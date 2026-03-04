function predictDiabetes(glucose = null, bloodPressure = null, skinfold = null, 
                        insulin = null, bmi = null, diabetesPedigree = null, age = null) {
    if (bmi === null) return 'false';
    if (bmi > 26.92401) {
        if (glucose === null) return 'false';
        if (glucose > 129) {
            if (bmi > 30.25417) {
                if (insulin === null) return 'true';
                if (insulin > 629) return 'false';
                if (insulin <= 629) {
                    if (age === null) return 'true';
                    if (age > 30) {
                        if (diabetesPedigree === null) return 'true';
                        if (diabetesPedigree > 1.407) {
                            if (skinfold === null) return 'false';
                            if (skinfold > 17) return 'true';
                            if (skinfold <= 17) return 'false';
                        }
                        if (diabetesPedigree <= 1.407) {
                            if (bloodPressure === null) return 'true';
                            if (bloodPressure > 65) {
                                if (diabetesPedigree > 0.43113) {
                                    if (bmi > 38.6) {
                                        if (skinfold === null) return 'true';
                                        if (skinfold > 43) return 'false';
                                        if (skinfold <= 43) {
                                            if (bloodPressure > 77) {
                                                if (skinfold > 40) return 'true';
                                                if (skinfold <= 40) {
                                                    if (bloodPressure > 89) return 'true';
                                                    if (bloodPressure <= 89) {
                                                        if (age > 38) return 'false';
                                                        if (age <= 38) {
                                                            if (bloodPressure > 83) return 'false';
                                                            if (bloodPressure <= 83) return 'true';
                                                        }
                                                    }
                                                }
                                            }
                                            if (bloodPressure <= 77) return 'true';
                                        }
                                    }
                                    if (bmi <= 38.6) {
                                        if (bloodPressure > 69) return 'true';
                                        if (bloodPressure <= 69) {
                                            if (diabetesPedigree > 0.7315) return 'true';
                                            if (diabetesPedigree <= 0.7315) return 'false';
                                        }
                                    }
                                }
                                if (diabetesPedigree <= 0.43113) {
                                    if (diabetesPedigree > 0.16125) {
                                        if (bloodPressure > 98) return 'true';
                                        if (bloodPressure <= 98) {
                                            if (bmi > 34.3) {
                                                if (skinfold === null) return 'true';
                                                if (skinfold > 34) return 'true';
                                                if (skinfold <= 34) {
                                                    if (insulin > 45) return 'true';
                                                    if (insulin <= 45) {
                                                        if (diabetesPedigree > 0.2505) return 'true';
                                                        if (diabetesPedigree <= 0.2505) {
                                                            if (age > 34) return 'false';
                                                            if (age <= 34) return 'true';
                                                        }
                                                    }
                                                }
                                            }
                                            if (bmi <= 34.3) {
                                                if (insulin > 33) return 'false';
                                                if (insulin <= 33) {
                                                    if (bloodPressure > 74) {
                                                        if (diabetesPedigree > 0.3465) return 'false';
                                                        if (diabetesPedigree <= 0.3465) {
                                                            if (skinfold === null) return 'false';
                                                            if (skinfold > 24) return 'false';
                                                            if (skinfold <= 24) {
                                                                if (bloodPressure > 81) return 'true';
                                                                if (bloodPressure <= 81) return 'false';
                                                            }
                                                        }
                                                    }
                                                    if (bloodPressure <= 74) return 'true';
                                                }
                                            }
                                        }
                                    }
                                    if (diabetesPedigree <= 0.16125) return 'true';
                                }
                            }
                            if (bloodPressure <= 65) return 'true';
                        }
                    }
                    if (age <= 30) {
                        if (glucose > 160) {
                            if (age > 25) {
                                if (diabetesPedigree === null) return 'true';
                                if (diabetesPedigree > 0.3055) return 'true';
                                if (diabetesPedigree <= 0.3055) {
                                    if (bloodPressure === null) return 'false';
                                    if (bloodPressure > 67) {
                                        if (bmi > 45.6) return 'false';
                                        if (bmi <= 45.6) return 'true';
                                    }
                                    if (bloodPressure <= 67) return 'false';
                                }
                            }
                            if (age <= 25) return 'true';
                        }
                        if (glucose <= 160) {
                            if (insulin > 261) {
                                if (insulin > 512) return 'true';
                                if (insulin <= 512) {
                                    if (bloodPressure === null) return 'false';
                                    if (bloodPressure > 61) return 'false';
                                    if (bloodPressure <= 61) return 'true';
                                }
                            }
                            if (insulin <= 261) {
                                if (bloodPressure === null) return 'true';
                                if (bloodPressure > 61) {
                                    if (insulin > 207) return 'true';
                                    if (insulin <= 207) {
                                        if (bloodPressure > 85) {
                                            if (glucose > 138) return 'true';
                                            if (glucose <= 138) return 'false';
                                        }
                                        if (bloodPressure <= 85) {
                                            if (bloodPressure > 72) {
                                                if (bmi > 32) return 'false';
                                                if (bmi <= 32) {
                                                    if (bmi > 31.4) return 'true';
                                                    if (bmi <= 31.4) return 'false';
                                                }
                                            }
                                            if (bloodPressure <= 72) {
                                                if (bmi > 33.75) {
                                                    if (diabetesPedigree === null) return 'true';
                                                    if (diabetesPedigree > 0.617) return 'false';
                                                    if (diabetesPedigree <= 0.617) return 'true';
                                                }
                                                if (bmi <= 33.75) {
                                                    if (bloodPressure > 69) {
                                                        if (skinfold === null) return 'false';
                                                        if (skinfold > 19) return 'false';
                                                        if (skinfold <= 19) return 'true';
                                                    }
                                                    if (bloodPressure <= 69) return 'false';
                                                }
                                            }
                                        }
                                    }
                                }
                                if (bloodPressure <= 61) return 'true';
                            }
                        }
                    }
                }
            }
            if (bmi <= 30.25417) {
                if (glucose > 165) {
                    if (insulin === null) return 'true';
                    if (insulin > 62) return 'true';
                    if (insulin <= 62) {
                        if (skinfold === null) return 'true';
                        if (skinfold > 23) return 'false';
                        if (skinfold <= 23) return 'true';
                    }
                }
                if (glucose <= 165) {
                    if (bloodPressure === null) return 'false';
                    if (bloodPressure > 23) {
                        if (diabetesPedigree === null) return 'false';
                        if (diabetesPedigree > 0.553) return 'false';
                        if (diabetesPedigree <= 0.553) {
                            if (bloodPressure > 84) return 'false';
                            if (bloodPressure <= 84) {
                                if (bmi > 27.85) {
                                    if (age === null) return 'true';
                                    if (age > 56) return 'false';
                                    if (age <= 56) {
                                        if (diabetesPedigree > 0.38) {
                                            if (skinfold === null) return 'false';
                                            if (skinfold > 17) return 'false';
                                            if (skinfold <= 17) {
                                                if (diabetesPedigree > 0.488) return 'true';
                                                if (diabetesPedigree <= 0.488) return 'false';
                                            }
                                        }
                                        if (diabetesPedigree <= 0.38) {
                                            if (diabetesPedigree > 0.305) return 'true';
                                            if (diabetesPedigree <= 0.305) {
                                                if (age > 39) return 'true';
                                                if (age <= 39) return 'false';
                                            }
                                        }
                                    }
                                }
                                if (bmi <= 27.85) return 'false';
                            }
                        }
                    }
                    if (bloodPressure <= 23) return 'true';
                }
            }
        }
        if (glucose <= 129) {
            if (glucose > 100) {
                if (diabetesPedigree === null) return 'false';
                if (diabetesPedigree > 0.93908) {
                    if (diabetesPedigree > 1.3955) return 'false';
                    if (diabetesPedigree <= 1.3955) {
                        if (skinfold === null) return 'true';
                        if (skinfold > 41) {
                            if (skinfold > 44) {
                                if (bmi > 38) return 'false';
                                if (bmi <= 38) return 'true';
                            }
                            if (skinfold <= 44) return 'false';
                        }
                        if (skinfold <= 41) return 'true';
                    }
                }
                if (diabetesPedigree <= 0.93908) {
                    if (insulin === null) return 'false';
                    if (insulin > 11) {
                        if (bmi > 45.44167) {
                            if (insulin > 235) return 'false';
                            if (insulin <= 235) return 'true';
                        }
                        if (bmi <= 45.44167) {
                            if (diabetesPedigree > 0.50574) {
                                if (bloodPressure === null) return 'false';
                                if (bloodPressure > 82) return 'false';
                                if (bloodPressure <= 82) {
                                    if (glucose > 109) {
                                        if (skinfold === null) return 'false';
                                        if (skinfold > 21) {
                                            if (glucose > 113) {
                                                if (glucose > 120) {
                                                    if (insulin > 154) {
                                                        if (age === null) return 'false';
                                                        if (age > 26) {
                                                            if (skinfold > 37) return 'false';
                                                            if (skinfold <= 37) return 'true';
                                                        }
                                                        if (age <= 26) {
                                                            if (diabetesPedigree > 0.602) {
                                                                if (diabetesPedigree > 0.7085) return 'false';
                                                                if (diabetesPedigree <= 0.7085) return 'true';
                                                            }
                                                            if (diabetesPedigree <= 0.602) return 'false';
                                                        }
                                                    }
                                                    if (insulin <= 154) return 'false';
                                                }
                                                if (glucose <= 120) return 'true';
                                            }
                                            if (glucose <= 113) return 'false';
                                        }
                                        if (skinfold <= 21) return 'false';
                                    }
                                    if (glucose <= 109) {
                                        if (age === null) return 'true';
                                        if (age > 24) {
                                            if (glucose > 103) return 'true';
                                            if (glucose <= 103) return 'false';
                                        }
                                        if (age <= 24) {
                                            if (diabetesPedigree > 0.5575) return 'false';
                                            if (diabetesPedigree <= 0.5575) return 'true';
                                        }
                                    }
                                }
                            }
                            if (diabetesPedigree <= 0.50574) {
                                if (insulin > 111) {
                                    if (bloodPressure === null) return 'false';
                                    if (bloodPressure > 87) return 'true';
                                    if (bloodPressure <= 87) {
                                        if (age === null) return 'false';
                                        if (age > 32) {
                                            if (age > 49) return 'false';
                                            if (age <= 49) {
                                                if (skinfold === null) return 'true';
                                                if (skinfold > 20) {
                                                    if (insulin > 288) return 'false';
                                                    if (insulin <= 288) {
                                                        if (diabetesPedigree > 0.27) {
                                                            if (diabetesPedigree > 0.3595) return 'true';
                                                            if (diabetesPedigree <= 0.3595) return 'false';
                                                        }
                                                        if (diabetesPedigree <= 0.27) return 'true';
                                                    }
                                                }
                                                if (skinfold <= 20) return 'false';
                                            }
                                        }
                                        if (age <= 32) return 'false';
                                    }
                                }
                                if (insulin <= 111) return 'false';
                            }
                        }
                    }
                    if (insulin <= 11) {
                        if (diabetesPedigree > 0.20269) {
                            if (glucose > 122) {
                                if (diabetesPedigree > 0.271) {
                                    if (bmi > 39.2) return 'true';
                                    if (bmi <= 39.2) {
                                        if (diabetesPedigree > 0.3265) {
                                            if (glucose > 127) return 'false';
                                            if (glucose <= 127) {
                                                if (glucose > 124) return 'true';
                                                if (glucose <= 124) {
                                                    if (skinfold === null) return 'false';
                                                    if (skinfold > 16) return 'false';
                                                    if (skinfold <= 16) return 'true';
                                                }
                                            }
                                        }
                                        if (diabetesPedigree <= 0.3265) return 'false';
                                    }
                                }
                                if (diabetesPedigree <= 0.271) return 'true';
                            }
                            if (glucose <= 122) {
                                if (bmi > 46.05) return 'true';
                                if (bmi <= 46.05) {
                                    if (glucose > 121) return 'false';
                                    if (glucose <= 121) {
                                        if (age === null) return 'false';
                                        if (age > 53) {
                                            if (bloodPressure === null) return 'false';
                                            if (bloodPressure > 86) return 'false';
                                            if (bloodPressure <= 86) {
                                                if (age > 61) return 'true';
                                                if (age <= 61) return 'false';
                                            }
                                        }
                                        if (age <= 53) {
                                            if (age > 28) {
                                                if (bloodPressure === null) return 'true';
                                                if (bloodPressure > 58) {
                                                    if (glucose > 105) {
                                                        if (bmi > 33.9) {
                                                            if (bmi > 37.3) {
                                                                if (skinfold === null) return 'false';
                                                                if (skinfold > 15) return 'false';
                                                                if (skinfold <= 15) return 'true';
                                                            }
                                                            if (bmi <= 37.3) return 'false';
                                                        }
                                                        if (bmi <= 33.9) {
                                                            if (diabetesPedigree > 0.264) {
                                                                if (diabetesPedigree > 0.2685) {
                                                                    if (bloodPressure > 70) return 'true';
                                                                    if (bloodPressure <= 70) {
                                                                        if (diabetesPedigree > 0.4255) {
                                                                            if (diabetesPedigree > 0.7205) {
                                                                                if (age > 33) return 'true';
                                                                                if (age <= 33) return 'false';
                                                                            }
                                                                            if (diabetesPedigree <= 0.7205) return 'false';
                                                                        }
                                                                        if (diabetesPedigree <= 0.4255) return 'true';
                                                                    }
                                                                }
                                                                if (diabetesPedigree <= 0.2685) return 'false';
                                                            }
                                                            if (diabetesPedigree <= 0.264) return 'true';
                                                        }
                                                    }
                                                    if (glucose <= 105) return 'true';
                                                }
                                                if (bloodPressure <= 58) return 'false';
                                            }
                                            if (age <= 28) {
                                                if (skinfold === null) return 'false';
                                                if (skinfold > 8) {
                                                    if (diabetesPedigree > 0.482) {
                                                        if (skinfold > 31) {
                                                            if (bloodPressure === null) return 'false';
                                                            if (bloodPressure > 77) return 'false';
                                                            if (bloodPressure <= 77) return 'true';
                                                        }
                                                        if (skinfold <= 31) return 'false';
                                                    }
                                                    if (diabetesPedigree <= 0.482) return 'false';
                                                }
                                                if (skinfold <= 8) {
                                                    if (bmi > 43.7) return 'false';
                                                    if (bmi <= 43.7) return 'true';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (diabetesPedigree <= 0.20269) {
                            if (glucose > 110) {
                                if (bloodPressure === null) return 'false';
                                if (bloodPressure > 78) return 'false';
                                if (bloodPressure <= 78) {
                                    if (bmi > 29.45) {
                                        if (bmi > 34.55) {
                                            if (age === null) return 'false';
                                            if (age > 23) {
                                                if (bloodPressure > 26) return 'true';
                                                if (bloodPressure <= 26) return 'false';
                                            }
                                            if (age <= 23) return 'false';
                                        }
                                        if (bmi <= 34.55) {
                                            if (bmi > 32) return 'true';
                                            if (bmi <= 32) {
                                                if (age === null) return 'true';
                                                if (age > 24) return 'true';
                                                if (age <= 24) return 'false';
                                            }
                                        }
                                    }
                                    if (bmi <= 29.45) {
                                        if (age === null) return 'false';
                                        if (age > 35) return 'true';
                                        if (age <= 35) return 'false';
                                    }
                                }
                            }
                            if (glucose <= 110) {
                                if (diabetesPedigree > 0.179) {
                                    if (skinfold === null) return 'false';
                                    if (skinfold > 9) return 'false';
                                    if (skinfold <= 9) {
                                        if (diabetesPedigree > 0.1855) return 'false';
                                        if (diabetesPedigree <= 0.1855) return 'true';
                                    }
                                }
                                if (diabetesPedigree <= 0.179) return 'false';
                            }
                        }
                    }
                }
            }
            if (glucose <= 100) {
                if (skinfold === null) return 'false';
                if (skinfold > 30) {
                    if (diabetesPedigree === null) return 'false';
                    if (diabetesPedigree > 0.47175) {
                        if (bloodPressure === null) return 'false';
                        if (bloodPressure > 86) return 'false';
                        if (bloodPressure <= 86) {
                            if (age === null) return 'false';
                            if (age > 25) {
                                if (skinfold > 32) {
                                    if (age > 28) {
                                        if (insulin === null) return 'false';
                                        if (insulin > 24) {
                                            if (insulin > 160) return 'true';
                                            if (insulin <= 160) return 'false';
                                        }
                                        if (insulin <= 24) return 'true';
                                    }
                                    if (age <= 28) return 'true';
                                }
                                if (skinfold <= 32) return 'true';
                            }
                            if (age <= 25) {
                                if (age > 23) return 'false';
                                if (age <= 23) {
                                    if (skinfold > 34) return 'false';
                                    if (skinfold <= 34) return 'true';
                                }
                            }
                        }
                    }
                    if (diabetesPedigree <= 0.47175) {
                        if (bmi > 31.1) {
                            if (bloodPressure === null) return 'false';
                            if (bloodPressure > 79) {
                                if (glucose > 28) return 'false';
                                if (glucose <= 28) return 'true';
                            }
                            if (bloodPressure <= 79) return 'false';
                        }
                        if (bmi <= 31.1) {
                            if (age === null) return 'true';
                            if (age > 24) return 'true';
                            if (age <= 24) return 'false';
                        }
                    }
                }
                if (skinfold <= 30) {
                    if (glucose > 91) {
                        if (age === null) return 'false';
                        if (age > 23) {
                            if (diabetesPedigree === null) return 'false';
                            if (diabetesPedigree > 0.9375) return 'false';
                            if (diabetesPedigree <= 0.9375) {
                                if (age > 42) {
                                    if (insulin === null) return 'true';
                                    if (insulin > 90) return 'true';
                                    if (insulin <= 90) {
                                        if (diabetesPedigree > 0.383) return 'false';
                                        if (diabetesPedigree <= 0.383) return 'true';
                                    }
                                }
                                if (age <= 42) {
                                    if (skinfold > 26) return 'false';
                                    if (skinfold <= 26) {
                                        if (insulin === null) return 'false';
                                        if (insulin > 84) return 'true';
                                        if (insulin <= 84) {
                                            if (glucose > 94) {
                                                if (insulin > 53) return 'false';
                                                if (insulin <= 53) {
                                                    if (bloodPressure === null) return 'true';
                                                    if (bloodPressure > 70) {
                                                        if (age > 33) return 'false';
                                                        if (age <= 33) return 'true';
                                                    }
                                                    if (bloodPressure <= 70) return 'true';
                                                }
                                            }
                                            if (glucose <= 94) return 'false';
                                        }
                                    }
                                }
                            }
                        }
                        if (age <= 23) return 'false';
                    }
                    if (glucose <= 91) {
                        if (age === null) return 'false';
                        if (age > 31) {
                            if (diabetesPedigree === null) return 'false';
                            if (diabetesPedigree > 0.9955) return 'true';
                            if (diabetesPedigree <= 0.9955) return 'false';
                        }
                        if (age <= 31) return 'false';
                    }
                }
            }
        }
    }
    if (bmi <= 26.92401) {
        if (glucose === null) return 'false';
        if (glucose > 148) {
            if (bloodPressure === null) return 'true';
            if (bloodPressure > 61) {
                if (bloodPressure > 71) {
                    if (age === null) return 'true';
                    if (age > 25) {
                        if (age > 62) return 'false';
                        if (age <= 62) {
                            if (diabetesPedigree === null) return 'true';
                            if (diabetesPedigree > 0.2185) return 'true';
                            if (diabetesPedigree <= 0.2185) {
                                if (age > 48) return 'true';
                                if (age <= 48) return 'false';
                            }
                        }
                    }
                    if (age <= 25) return 'false';
                }
                if (bloodPressure <= 71) return 'true';
            }
            if (bloodPressure <= 61) return 'false';
        }
        if (glucose <= 148) {
            if (glucose > 103) {
                if (insulin === null) return 'false';
                if (insulin > 117) return 'false';
                if (insulin <= 117) {
                    if (diabetesPedigree === null) return 'false';
                    if (diabetesPedigree > 0.21333) {
                        if (bmi > 9.2) {
                            if (age === null) return 'false';
                            if (age > 29) {
                                if (diabetesPedigree > 0.2845) return 'false';
                                if (diabetesPedigree <= 0.2845) {
                                    if (diabetesPedigree > 0.2725) return 'true';
                                    if (diabetesPedigree <= 0.2725) return 'false';
                                }
                            }
                            if (age <= 29) {
                                if (age > 27) return 'true';
                                if (age <= 27) {
                                    if (bloodPressure === null) return 'false';
                                    if (bloodPressure > 63) return 'false';
                                    if (bloodPressure <= 63) {
                                        if (bmi > 25.8) return 'false';
                                        if (bmi <= 25.8) {
                                            if (age > 21) return 'true';
                                            if (age <= 21) return 'false';
                                        }
                                    }
                                }
                            }
                        }
                        if (bmi <= 9.2) {
                            if (age === null) return 'false';
                            if (age > 27) return 'true';
                            if (age <= 27) return 'false';
                        }
                    }
                    if (diabetesPedigree <= 0.21333) return 'false';
                }
            }
            if (glucose <= 103) return 'false';
        }
    }
    return 'false';
}

document.getElementById('diabetesForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const bmi = parseFloat(document.getElementById('bmi').value) || null;
    const glucose = parseFloat(document.getElementById('glucose').value) || null;
    const insulin = parseFloat(document.getElementById('insulin').value) || null;
    const age = parseFloat(document.getElementById('age').value) || null;
    const diabetesPedigree = parseFloat(document.getElementById('diabetes_pedigree').value) || null;
    const skinfold = parseFloat(document.getElementById('skinfold').value) || null;
    const bloodPressure = parseFloat(document.getElementById('blood_pressure').value) || null;

    // Make prediction
    const prediction = predictDiabetes(glucose, bloodPressure, skinfold, insulin, bmi, diabetesPedigree, age);
    
    // Display result
    const resultDiv = document.getElementById('result');
    const resultIcon = document.getElementById('resultIcon');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resultRecommendation = document.getElementById('resultRecommendation');

    if (prediction === 'true') {
        resultDiv.className = 'result show high-risk';
        resultIcon.textContent = '⚠️';
        resultTitle.textContent = 'High Risk';
        resultMessage.textContent = 'Based on the provided health metrics, there is a significant risk of diabetes.';
        resultRecommendation.textContent = 'Consider consulting a healthcare professional for further evaluation and appropriate medical advice.';
    } else {
        resultDiv.className = 'result show low-risk';
        resultIcon.textContent = '✅';
        resultTitle.textContent = 'Low Risk';
        resultMessage.textContent = 'Based on the provided health metrics, the diabetes risk appears to be low.';
        resultRecommendation.textContent = 'Maintain a healthy lifestyle with regular exercise and balanced diet.';
    }

    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('diabetesForm').addEventListener('reset', function() {
    document.getElementById('result').classList.remove('show');
});
