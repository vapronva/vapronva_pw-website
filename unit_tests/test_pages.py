from unit_tests import client

def test_page_index(client):
    page = client.get("/")
    html = page.data.decode()
    assert "About Me" in html
    assert "Hi, there! I&rsquo;m Vladimir. And this, hueh, just a website, I guess?" in html
    assert page.status_code == 200

def test_page_about(client):
    page = client.get("/about/")
    html = page.data.decode()
    assert "Hello! I&rsquo;m Vladimir (possibly a developer" in html
    assert "Contact Information &amp; Social Media" in html
    assert page.status_code == 200

def test_page_copyright(client):
    page = client.get("/copyright/")
    html = page.data.decode()
    assert page.status_code == 200

def test_page_privacy(client):
    page = client.get("/privacy/")
    html = page.data.decode()
    assert page.status_code == 200

def test_page_projects(client):
    page = client.get("/projects/")
    html = page.data.decode()
    assert "Active Projects" in html
    assert "That&rsquo;s a Nice Argument" in html
    assert page.status_code == 200

def test_page_shse(client):
    page = client.get("/shse/")
    html = page.data.decode()
    assert "Onboarding on My Self-Hosted Services" in html
    assert "Contact via Email" in html
    assert page.status_code == 200

def test_page_wcid(client):
    page = client.get("/wcid/")
    html = page.data.decode()
    assert "Well… here it goes! The things" in html
    assert "Homelab Enthusiast &amp; Developer Operations" in html
    assert page.status_code == 200
