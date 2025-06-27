import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormationService {

    @Autowired
    private FormationRepository formationRepository;

    public Formation saveFormation(Formation formation) {
        return formationRepository.save(formation);
    }
}
