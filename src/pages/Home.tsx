import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, CheckCircle, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const Home = () => {
  const [text, setText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      // Store the analysis data in sessionStorage for demo
      const analysisResult = {
        text: text,
        credibilityScore: Math.floor(Math.random() * 100),
        concerningTerms: ["unverified", "rumor", "allegedly"],
        supportingTerms: ["verified", "confirmed", "according to"],
        references: [
          "https://example.com/fact-check-1",
          "https://example.com/fact-check-2",
          "https://example.com/fact-check-3"
        ],
        timestamp: new Date().toISOString()
      };
      
      sessionStorage.setItem('currentAnalysis', JSON.stringify(analysisResult));
      
      // Save to history
      const history = JSON.parse(localStorage.getItem('analysisHistory') || '[]');
      history.unshift({
        id: Date.now(),
        preview: text.substring(0, 50) + (text.length > 50 ? '...' : ''),
        credibilityScore: analysisResult.credibilityScore,
        timestamp: analysisResult.timestamp
      });
      localStorage.setItem('analysisHistory', JSON.stringify(history.slice(0, 10)));
      
      setIsAnalyzing(false);
      navigate('/analysis');
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Check if information is{" "}
            <span className="text-primary">CREDIBLE</span>
            <br />
            with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Paste any text or article to analyze credibility instantly.
          </p>

          {/* Input Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <Textarea
              placeholder="Paste your news, claim or article here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-32 text-base p-4 border-2 focus:border-primary transition-colors"
            />
            <Button
              onClick={handleAnalyze}
              disabled={!text.trim() || isAnalyzing}
              className="mt-4 px-8 py-3 text-lg font-medium"
              size="lg"
            >
              {isAnalyzing ? "Analyzing..." : "Analyse Now"}
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
              <p className="text-muted-foreground">Get results in seconds</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Advanced algorithms</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fact-Checked</h3>
              <p className="text-muted-foreground">Cross-referenced sources</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;